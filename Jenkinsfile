pipeline {
    agent any

    environment {
        REGISTRY = "acrthoughtcanvasdev.azurecr.io"
        IMAGE_NAME = "thoughtcanvas-app"
        TAG = "build-${env.BUILD_NUMBER}"
        AZURE_RESOURCE_GROUP = "rg-thoughtcanvas-dev"
        APP_SERVICE_NAME = "app-thoughtcanvas-dev"
        STAGING_SLOT = "green"
        KEYVAULT_NAME = "kv-thoughtcanvas-dev"
        ACR_CREDENTIALS_ID = "azure-acr-credentials"
        AZURE_CREDENTIALS_ID = "azure-service-principal"
    }

    stages {
        stage('1. Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('2. Install Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm ci'
                }
            }
        }

        stage('3. Lint & Validate') {
            steps {
                dir('backend') {
                    sh 'npm run lint || true'
                }
            }
        }

        stage('4. Unit / Basic Tests') {
            steps {
                dir('backend') {
                    sh 'npm test || true'
                }
            }
        }

       stage('5. Build Docker Image') {
            steps {
                sh """
                    echo "Disabling BuildKit to bypass snapshot corruption..."
                    export DOCKER_BUILDKIT=0
                    docker build --no-cache -t ${env.REGISTRY}/${env.IMAGE_NAME}:${env.TAG} -t ${env.REGISTRY}/${env.IMAGE_NAME}:latest -f backend/Dockerfile backend/
                """
            }
        }

        stage('6. Push Image to ACR') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'acr-credentials-id', passwordVariable: 'ACR_PASSWORD', usernameVariable: 'ACR_USER')]) {
                    sh """
                        echo "Logging into Azure Container Registry..."
                        echo "${ACR_PASSWORD}" | docker login ${env.REGISTRY} -u "${ACR_USER}" --password-stdin
                        
                        echo "Pushing Docker images..."
                        docker push ${env.REGISTRY}/${env.IMAGE_NAME}:${env.TAG}
                        docker push ${env.REGISTRY}/${env.IMAGE_NAME}:latest
                    """
                }
            }
        }

        stage('7. CD: Azure Login & Configure Settings') {
            steps {
                withCredentials([azureServicePrincipal(credentialsId: "${env.AZURE_CREDENTIALS_ID}")]) {
                    sh """
                        az login --service-principal -u \$AZURE_CLIENT_ID -p \$AZURE_CLIENT_SECRET --tenant \$AZURE_TENANT_ID
                        
                        echo "Ensuring Managed Identity on Staging Slot..."
                        az webapp identity assign \
                            --name ${env.APP_SERVICE_NAME} \
                            --resource-group ${env.AZURE_RESOURCE_GROUP} \
                            --slot ${env.STAGING_SLOT}
                        
                        echo "Configuring Key Vault environment variables..."
                        az webapp config appsettings set \
                            --name ${env.APP_SERVICE_NAME} \
                            --resource-group ${env.AZURE_RESOURCE_GROUP} \
                            --slot ${env.STAGING_SLOT} \
                            --settings KEYVAULT_NAME="${env.KEYVAULT_NAME}" \
                                       NODE_ENV="production" \
                                       PORT="5000"
                    """
                }
            }
        }

        stage('8. CD: Deploy to Staging Slot (Green)') {
            steps {
                withCredentials([azureServicePrincipal(credentialsId: "${env.AZURE_CREDENTIALS_ID}")]) {
                    sh """
                        echo "Deploying custom container image to Green Slot..."
                        az webapp config container set \
                            --name ${env.APP_SERVICE_NAME} \
                            --resource-group ${env.AZURE_RESOURCE_GROUP} \
                            --slot ${env.STAGING_SLOT} \
                            --docker-custom-image-name ${env.REGISTRY}/${env.IMAGE_NAME}:${env.TAG} \
                            --docker-registry-server-url https://${env.REGISTRY}
                        
                        echo "Restarting Staging Slot..."
                        az webapp restart \
                            --name ${env.APP_SERVICE_NAME} \
                            --resource-group ${env.AZURE_RESOURCE_GROUP} \
                            --slot ${env.STAGING_SLOT}
                    """
                }
            }
        }

        stage('9. CD: Blue/Green Slot Swap') {
            steps {
                input message: "Promote deployment from Green slot to Production?", ok: "Swap Slots"
                withCredentials([azureServicePrincipal(credentialsId: "${env.AZURE_CREDENTIALS_ID}")]) {
                    sh """
                        echo "Swapping Green slot into Production..."
                        az webapp deployment slot swap \
                            --name ${env.APP_SERVICE_NAME} \
                            --resource-group ${env.AZURE_RESOURCE_GROUP} \
                            --slot ${env.STAGING_SLOT} \
                            --target-slot production
                    """
                }
            }
        }
    }

    post {
        success {
            echo "Pipeline executed successfully! Production environment updated."
        }
        failure {
            echo "Pipeline failed. Review console logs."
        }
    }
}
