# 🛤️ ThoughtCanvas — Cloud-Native Technical Documentation & Blog Platform

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square\&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=flat-square\&logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square\&logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat-square\&logo=docker)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=flat-square\&logo=jenkins)
![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?style=flat-square\&logo=terraform)
![Azure](https://img.shields.io/badge/Microsoft%20Azure-Cloud-0078D4?style=flat-square\&logo=microsoftazure)
![ACR](https://img.shields.io/badge/Azure%20Container%20Registry-ACR-0078D4?style=flat-square)
![SonarQube](https://img.shields.io/badge/SonarQube-Code%20Quality-4E9BCD?style=flat-square)
![Trivy](https://img.shields.io/badge/Trivy-Security-1904DA?style=flat-square)

---

## 📌 Project Overview

**ThoughtCanvas** is a modern technical documentation and blogging platform designed to provide a centralized workspace for creating, publishing, updating, and discussing technical articles, architectural notes, and engineering documentation.

The application follows a **3-tier architecture**:

```text
┌─────────────────────────────────────────────────────────┐
│                     PRESENTATION TIER                   │
│                                                         │
│                 React + Nginx Frontend                  │
└──────────────────────────┬──────────────────────────────┘
                           │
                         REST API
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                    APPLICATION TIER                     │
│                                                         │
│               Node.js + Express Backend                 │
└──────────────────────────┬──────────────────────────────┘
                           │
                          SQL
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                       DATA TIER                         │
│                                                         │
│                    PostgreSQL Database                  │
└─────────────────────────────────────────────────────────┘
```

The application is containerized using **Docker**, images are stored in **Azure Container Registry (ACR)**, and the application containers are hosted on **Azure App Service**.

The complete CI/CD workflow is automated using **Jenkins**, while Azure infrastructure is provisioned using **Terraform**.

---

# 🎯 Project Objectives

The objective of Project 5 is to implement a production-style DevOps and DevSecOps workflow for a containerized full-stack application.

The project demonstrates:

* 3-tier application architecture
* React frontend development
* Node.js and Express REST API
* PostgreSQL database integration
* Docker containerization
* Docker Compose for local development
* GitHub source control
* Jenkins CI/CD automation
* GitHub webhook integration
* SonarQube code quality analysis
* Trivy container vulnerability scanning
* Azure Container Registry for image management
* Azure App Service for container hosting
* Terraform Infrastructure as Code
* Automated deployment validation
* Environment-based application configuration
* Secure handling of application credentials

---

# 🏗️ Solution Architecture

## Application Architecture

```text
                         ┌──────────────────┐
                         │      USERS       │
                         └────────┬─────────┘
                                  │
                                  ▼
                    ┌─────────────────────────┐
                    │    Azure App Service    │
                    │                         │
                    │   Frontend Web App      │
                    │                         │
                    │ React + Nginx Container  │
                    └────────────┬────────────┘
                                 │
                              REST API
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │    Azure App Service    │
                    │                         │
                    │    Backend Web App      │
                    │                         │
                    │ Node.js + Express       │
                    └────────────┬────────────┘
                                 │
                                SQL
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │       PostgreSQL        │
                    │                         │
                    │   Application Database  │
                    └─────────────────────────┘
```

---

# 🚀 CI/CD Architecture

```text
                         ┌──────────────────┐
                         │     Developer    │
                         └────────┬─────────┘
                                  │
                               git push
                                  │
                                  ▼
                         ┌──────────────────┐
                         │      GitHub      │
                         │ Source Control   │
                         └────────┬─────────┘
                                  │
                             Webhook Trigger
                                  │
                                  ▼
                         ┌──────────────────┐
                         │     Jenkins      │
                         │    CI/CD Server  │
                         └────────┬─────────┘
                                  │
              ┌───────────────────┼───────────────────┐
              │                   │                   │
              ▼                   ▼                   ▼
       ┌────────────┐      ┌────────────┐      ┌────────────┐
       │ Unit Tests │      │ SonarQube  │      │   Trivy    │
       │            │      │ Code Scan  │      │Image Scan  │
       └────────────┘      └────────────┘      └────────────┘
                                  │
                                  ▼
                         ┌──────────────────┐
                         │   Docker Build   │
                         │ Versioned Images │
                         └────────┬─────────┘
                                  │
                                  ▼
                     ┌────────────────────────┐
                     │ Azure Container        │
                     │ Registry (ACR)         │
                     └───────────┬────────────┘
                                 │
                              Pull Image
                                 │
                                 ▼
                     ┌────────────────────────┐
                     │    Azure App Service   │
                     │                        │
                     │ Frontend Web App       │
                     │ Backend Web App        │
                     └───────────┬────────────┘
                                 │
                                 ▼
                         Health Validation
```

---

# ☁️ Azure Infrastructure

Terraform is used to provision and manage the Azure resources required by the application.

```text
                 Azure Subscription
                         │
                         ▼
                 ┌───────────────┐
                 │ Resource Group│
                 └───────┬───────┘
                         │
          ┌──────────────┼──────────────┐
          │              │              │
          ▼              ▼              ▼
   App Service Plan     ACR        PostgreSQL
          │
     ┌────┴────┐
     │         │
     ▼         ▼
 Frontend   Backend
 Web App    Web App
```

Terraform manages infrastructure consistently across environments.

---

# 🧰 Technology Stack

| Category               | Technology               |
| ---------------------- | ------------------------ |
| Frontend               | React 18                 |
| Web Server             | Nginx                    |
| Backend                | Node.js 20               |
| API Framework          | Express.js               |
| Database               | PostgreSQL 16            |
| Source Control         | Git / GitHub             |
| Containerization       | Docker                   |
| Local Orchestration    | Docker Compose           |
| CI/CD                  | Jenkins                  |
| Code Quality           | SonarQube                |
| Security Scanning      | Trivy                    |
| Container Registry     | Azure Container Registry |
| Application Hosting    | Azure App Service        |
| Infrastructure as Code | Terraform                |
| Cloud Platform         | Microsoft Azure          |

---

# 📁 Repository Structure

```text
ThoughtCanvas/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── nginx.conf
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── db/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   ├── providers.tf
│   └── terraform.tfvars.example
│
├── deploy/
│   └── scripts/
│
├── docker-compose.yml
├── Jenkinsfile
├── .gitignore
└── README.md
```

---

# 🖥️ Application Components

## Frontend

The frontend is developed using **React** and served through **Nginx**.

Responsibilities include:

* User interface
* Article listing
* Article creation
* Article editing
* Article deletion
* Comment interface
* API communication

The frontend is packaged as a Docker image.

---

## Backend

The backend is implemented using **Node.js and Express**.

Responsibilities include:

* REST API
* Business logic
* Request validation
* Database communication
* Article management
* Comment management
* Health checks

The backend is packaged as a separate Docker image.

---

## Database

PostgreSQL is used as the application's relational database.

The database stores:

* Articles
* Comments
* Authors
* Application metadata

The frontend does **not** communicate directly with PostgreSQL.

The communication flow is:

```text
React
  │
  ▼
Node.js / Express
  │
  ▼
PostgreSQL
```

---

# 🗄️ PostgreSQL Data Model

The logical relationship between the main entities is:

```text
Authors
   │
   │ 1:N
   ▼
Posts
   │
   │ 1:N
   ▼
Comments
```

PostgreSQL provides:

* ACID transactions
* Referential integrity
* Foreign keys
* Relational data modeling
* Transaction management
* Persistent storage

---

# 🐳 Docker Architecture

The application uses separate containers for the frontend and backend.

### Frontend Container

```text
React Application
       │
       ▼
Production Build
       │
       ▼
Nginx
       │
       ▼
Port 80
```

### Backend Container

```text
Node.js
   │
   ▼
Express API
   │
   ▼
Port 5000
```

### Local Environment

```text
Docker Compose
      │
      ├── Frontend Container
      │
      ├── Backend Container
      │
      └── PostgreSQL Container
```

---

# 🐳 Running Locally with Docker Compose

## Start the Application

```bash
docker compose up -d --build
```

## Verify Containers

```bash
docker compose ps
```

## View Logs

```bash
docker compose logs -f
```

## View Backend Logs

```bash
docker compose logs -f backend
```

## Stop the Application

```bash
docker compose down
```

## Remove Containers and Volumes

```bash
docker compose down -v
```

Application:

```text
http://localhost
```

Backend API:

```text
http://localhost:5000
```

---

# 🩺 Application Health Check

The backend provides a health endpoint:

```http
GET /api/health
```

Local test:

```bash
curl http://localhost:5000/api/health
```

Example response:

```json
{
  "status": "healthy"
}
```

The health endpoint can be used for:

* Application monitoring
* Jenkins deployment validation
* Docker health checks
* Azure App Service health monitoring
* Operational troubleshooting

---

# 🔌 REST API

## Posts

| Method | Endpoint         | Description                |
| ------ | ---------------- | -------------------------- |
| GET    | `/api/posts`     | Get all published articles |
| GET    | `/api/posts/:id` | Get a single article       |
| POST   | `/api/posts`     | Create an article          |
| PUT    | `/api/posts/:id` | Update an article          |
| DELETE | `/api/posts/:id` | Delete an article          |

## Comments

| Method | Endpoint                     | Description             |
| ------ | ---------------------------- | ----------------------- |
| GET    | `/api/comments/post/:postId` | Get comments for a post |
| POST   | `/api/posts/:id/comments`    | Add a comment           |
| DELETE | `/api/comments/:id`          | Delete a comment        |

## Health

| Method | Endpoint      | Description              |
| ------ | ------------- | ------------------------ |
| GET    | `/api/health` | Application health check |

---

# 🔀 Git Branching Strategy

The repository follows a simple branching model.

```text
main
 │
 ├── feature/*
 │
 ├── bugfix/*
 │
 └── devops
```

### Main

Contains stable application code.

### Feature Branches

Used for new functionality and enhancements.

### Bugfix Branches

Used for defect resolution.

### DevOps Branch

Contains DevOps implementation such as:

* Docker
* Jenkins
* Terraform
* Azure configuration
* Security scanning
* Deployment automation

---

# 🚀 Jenkins CI/CD Pipeline

Jenkins automates the complete application delivery process.

The pipeline follows:

```text
GitHub
   │
   ▼
Webhook
   │
   ▼
Jenkins
   │
   ├── Checkout
   │
   ├── Install Dependencies
   │
   ├── Unit Tests
   │
   ├── SonarQube Analysis
   │
   ├── Quality Gate
   │
   ├── Docker Build
   │
   ├── Trivy Scan
   │
   ├── Push Image to ACR
   │
   ├── Deploy to Azure App Service
   │
   └── Health Check
```

---

# 🔄 CI Pipeline Stages

## 1. Source Code Checkout

Jenkins checks out the latest source code from GitHub.

---

## 2. Dependency Installation

Node.js dependencies are installed.

```bash
npm install
```

---

## 3. Unit Testing

Automated tests are executed before deployment.

```bash
npm test
```

A failed test causes the pipeline to stop.

---

## 4. SonarQube Analysis

SonarQube performs static code analysis.

The analysis can identify:

* Bugs
* Vulnerabilities
* Code smells
* Maintainability issues
* Code coverage

---

## 5. Quality Gate

Jenkins evaluates the SonarQube Quality Gate.

If the quality gate fails, the pipeline does not proceed to deployment.

---

# 🔒 Container Security with Trivy

Trivy is used to scan Docker images for known vulnerabilities.

Example:

```bash
trivy image <image-name>:<tag>
```

Trivy can identify vulnerabilities in:

* Operating system packages
* Application dependencies
* Container layers

The Jenkins pipeline can be configured to stop the deployment when vulnerabilities exceed the defined severity threshold.

---

# 🐳 Docker Image Build

Jenkins builds separate images for the frontend and backend.

Example:

```text
thoughtcanvas-frontend:<build-number>
thoughtcanvas-backend:<build-number>
```

Images are tagged using unique build or Git identifiers.

Example:

```text
thoughtcanvas-backend:build-125
```

or:

```text
thoughtcanvas-backend:git-8f3a21c
```

This provides:

* Traceability
* Version identification
* Reproducible deployments
* Easier troubleshooting
* Rollback capability

---

# 🏪 Azure Container Registry

**Azure Container Registry (ACR)** acts as the private container image repository.

```text
Azure Container Registry
        │
        ├── thoughtcanvas-frontend
        │
        └── thoughtcanvas-backend
```

Jenkins:

1. Builds the Docker image.
2. Scans the image using Trivy.
3. Authenticates to ACR.
4. Pushes the validated image.
5. Deploys the image to Azure App Service.

---

# ☁️ Azure App Service

The application is hosted using **Azure App Service for Containers**.

The frontend and backend are deployed as separate Web Apps.

```text
                 App Service Plan
                       │
              ┌────────┴────────┐
              │                 │
              ▼                 ▼
       Frontend Web App   Backend Web App
              │                 │
              ▼                 ▼
        React + Nginx      Node.js + Express
```

The Web Apps retrieve their container images from Azure Container Registry.

---

# 🔄 Deployment Flow

```text
Developer
    │
    ▼
GitHub
    │
    ▼
Jenkins
    │
    ├── Build
    ├── Test
    ├── SonarQube
    ├── Quality Gate
    ├── Docker Build
    └── Trivy Scan
             │
             ▼
      Azure Container Registry
             │
             ▼
       Azure App Service
             │
             ├── Frontend Web App
             │
             └── Backend Web App
             │
             ▼
        Health Validation
```

---

# 🔁 Deployment Validation

After deployment, Jenkins validates that the application is running successfully.

Example:

```bash
curl https://<backend-app-name>.azurewebsites.net/api/health
```

Expected response:

```json
{
  "status": "healthy"
}
```

A successful response confirms that the backend application is available after deployment.

---

# 🔄 Rollback Strategy

Docker image versioning allows the team to identify and redeploy a previously validated image.

For example:

```text
Current:
thoughtcanvas-backend:build-125

Previous:
thoughtcanvas-backend:build-124
```

If the latest deployment introduces an issue, the previous validated image can be redeployed.

For more advanced production environments, Azure App Service deployment slots can also be introduced for controlled releases and validation before production traffic is switched.

---

# 🏗️ Infrastructure as Code with Terraform

Terraform is used to provision Azure infrastructure.

Typical resources include:

```text
Azure Resource Group
       │
       ├── App Service Plan
       │
       ├── Frontend Web App
       │
       ├── Backend Web App
       │
       ├── Azure Container Registry
       │
       └── PostgreSQL
```

## Terraform Workflow

Initialize:

```bash
terraform init
```

Validate:

```bash
terraform validate
```

Create execution plan:

```bash
terraform plan
```

Apply infrastructure:

```bash
terraform apply
```

Destroy development infrastructure when required:

```bash
terraform destroy
```

Terraform configuration is maintained in source control to provide versioned and repeatable infrastructure management.

---

# 🔐 Azure Authentication

Jenkins requires secure authentication to Azure.

Credentials should be stored in **Jenkins Credentials** rather than inside the Jenkinsfile.

The pipeline may require permissions to:

* Authenticate to Azure
* Push images to ACR
* Access Azure resources
* Update App Service configuration
* Deploy application containers

Azure permissions should follow the **principle of least privilege**.

---

# 🔐 Configuration & Secrets Management

Application configuration is externalized from the source code.

Example:

```env
NODE_ENV=production
PORT=5000

DB_HOST=<database-host>
DB_PORT=5432
DB_NAME=thoughtcanvas
DB_USER=<database-user>
DB_PASSWORD=<database-password>
```

Sensitive information must never be committed to GitHub.

Examples of secrets include:

* Database passwords
* Azure credentials
* Service principal secrets
* Registry credentials
* API keys

Production configuration should be managed using:

* Azure App Service Configuration
* Jenkins Credentials
* Azure Key Vault where required

---

# 🛡️ DevSecOps Practices

Security is integrated directly into the CI/CD pipeline.

```text
Source Code
     │
     ▼
Unit Tests
     │
     ▼
SonarQube
     │
     ▼
Quality Gate
     │
     ▼
Docker Build
     │
     ▼
Trivy Scan
     │
     ▼
ACR
     │
     ▼
Azure App Service
```

This approach ensures that security and quality checks occur before application deployment.

---

# 📊 Monitoring & Operations

Azure App Service provides operational capabilities for monitoring the application.

Important operational areas include:

* Application availability
* Application logs
* Container startup
* HTTP response status
* Application errors
* Resource utilization
* Deployment status
* Database connectivity

The `/api/health` endpoint provides a simple application-level health check.

---

# 🧪 Testing Strategy

The CI/CD pipeline can perform multiple validation stages.

```text
Unit Tests
     │
     ▼
Code Quality
     │
     ▼
Quality Gate
     │
     ▼
Docker Build
     │
     ▼
Container Security Scan
     │
     ▼
Deployment
     │
     ▼
Application Health Check
```

This provides automated validation throughout the delivery lifecycle.

---

# 🌍 Environment Strategy

The application can be separated into multiple environments:

```text
Development
     │
     ▼
Testing
     │
     ▼
Staging
     │
     ▼
Production
```

Each environment can have different:

* Database configuration
* Application URLs
* API URLs
* Logging levels
* Resource configurations
* Secrets

Application configuration is maintained separately from the application source code.

---

# 📋 Prerequisites

## Local Development

* Git
* Docker
* Docker Compose
* Node.js 20+
* npm

## DevOps Environment

* GitHub
* Jenkins
* Docker
* Azure CLI
* Terraform
* Azure subscription
* Azure Container Registry
* Azure App Service
* SonarQube
* Trivy

---

# 🚀 Quick Start

## Clone the Repository

```bash
git clone <repository-url>

cd ThoughtCanvas
```

## Start the Local Environment

```bash
docker compose up -d --build
```

## Verify Containers

```bash
docker compose ps
```

## Test Backend Health

```bash
curl http://localhost:5000/api/health
```

## Open the Application

```text
http://localhost
```

---

# 🧹 Troubleshooting

## Check Docker Containers

```bash
docker ps
```

## Check Container Logs

```bash
docker logs <container-name>
```

## Check Compose Logs

```bash
docker compose logs -f
```

## Restart Application

```bash
docker compose restart
```

## Rebuild Containers

```bash
docker compose up -d --build
```

## Stop Application

```bash
docker compose down
```

## Complete Local Reset

```bash
docker compose down -v

docker compose up -d --build
```

---

# 📈 Future Enhancements

Potential production improvements include:

* Azure Key Vault integration
* Azure Database for PostgreSQL
* Azure Managed Identity
* Application Insights
* Azure Monitor
* HTTPS and custom domain
* App Service deployment slots
* Staging environment
* Production approval gates
* Automated integration testing
* Automated database migrations
* Private networking
* Web Application Firewall
* Database backup and disaster recovery
* Centralized application logging
* Automated dependency updates

---

# 🎓 DevOps & DevSecOps Skills Demonstrated

## Source Control

* Git
* GitHub
* Branching strategy
* Webhooks

## CI/CD

* Jenkins
* Automated builds
* Automated testing
* Quality gates
* Automated deployment
* Deployment validation

## Containerization

* Docker
* Docker Compose
* Dockerfiles
* Multi-stage builds
* Container image versioning

## Security

* SonarQube
* Trivy
* Static code analysis
* Vulnerability scanning
* Secure credentials management

## Infrastructure

* Terraform
* Azure Resource Groups
* Azure App Service
* Azure App Service Plans
* Azure Container Registry
* PostgreSQL

---

# 🏆 Project Summary

ThoughtCanvas demonstrates an end-to-end **DevOps and DevSecOps implementation** for a containerized full-stack application.

The solution integrates source control, continuous integration, automated security validation, containerization, image management, infrastructure automation, and cloud deployment into a single delivery workflow.

The overall process is:

```text
CODE
  ↓
COMMIT
  ↓
GITHUB
  ↓
WEBHOOK
  ↓
JENKINS
  ↓
BUILD
  ↓
TEST
  ↓
SONARQUBE
  ↓
QUALITY GATE
  ↓
DOCKER BUILD
  ↓
TRIVY SCAN
  ↓
AZURE CONTAINER REGISTRY
  ↓
AZURE APP SERVICE
  ↓
HEALTH CHECK
  ↓
APPLICATION
```

The architecture uses **Azure App Service for container hosting**, providing a managed application hosting platform without requiring a container orchestration platform.

This allows the project to demonstrate practical enterprise DevOps capabilities while keeping the deployment architecture focused, maintainable, and cost-effective.

---

# 👨‍💻 Project Information

| Component              | Technology               |
| ---------------------- | ------------------------ |
| Project                | ThoughtCanvas            |
| Architecture           | 3-Tier                   |
| Frontend               | React + Nginx            |
| Backend                | Node.js + Express        |
| Database               | PostgreSQL               |
| Containerization       | Docker                   |
| Local Environment      | Docker Compose           |
| Source Control         | GitHub                   |
| CI/CD                  | Jenkins                  |
| Code Quality           | SonarQube                |
| Security               | Trivy                    |
| Container Registry     | Azure Container Registry |
| Application Hosting    | Azure App Service        |
| Infrastructure as Code | Terraform                |
| Cloud                  | Microsoft Azure          |

---

> **Build → Test → Secure → Package → Deploy → Validate**

> ThoughtCanvas demonstrates real-world DevOps and DevSecOps practices using Docker, Jenkins, Terraform, Azure Container Registry, Azure App Service, SonarQube, Trivy, and PostgreSQL.
