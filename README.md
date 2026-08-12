# 🛤️ ThoughtCanvas — Cloud-Native Technical Documentation & Blog Platform

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square\&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=flat-square\&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=flat-square\&logo=express)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square\&logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=flat-square\&logo=docker)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=flat-square\&logo=jenkins)
![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?style=flat-square\&logo=terraform)
![Kubernetes](https://img.shields.io/badge/Kubernetes-AKS-326CE5?style=flat-square\&logo=kubernetes)
![Azure](https://img.shields.io/badge/Microsoft%20Azure-Cloud-0078D4?style=flat-square\&logo=microsoftazure)

---

## 📌 Project Overview

**ThoughtCanvas** is a cloud-native technical documentation and blogging platform designed to provide a centralized workspace for creating, publishing, updating, and discussing technical articles, architecture notes, and engineering documentation.

The application follows a **3-tier architecture**:

```text
┌──────────────────────────────────────────────────────────────┐
│                        USERS / CLIENTS                       │
└──────────────────────────────┬───────────────────────────────┘
                               │
                               ▼
┌──────────────────────────────────────────────────────────────┐
│                    FRONTEND APPLICATION                      │
│                  React 18 + Nginx                            │
│                       Port 80                                │
└──────────────────────────────┬───────────────────────────────┘
                               │ REST API
                               ▼
┌──────────────────────────────────────────────────────────────┐
│                     BACKEND API                             │
│                Node.js + Express                            │
│                     Port 5000                                │
└──────────────────────────────┬───────────────────────────────┘
                               │ SQL
                               ▼
┌──────────────────────────────────────────────────────────────┐
│                     DATABASE                                 │
│                  PostgreSQL 16                               │
│                     Port 5432                                │
└──────────────────────────────────────────────────────────────┘
```

The application is containerized using Docker and is designed to support automated **CI/CD, infrastructure provisioning, security scanning, and cloud deployment**.

---

# 🎯 Project Objectives

The primary objectives of ThoughtCanvas are:

* Build a production-style full-stack web application.
* Implement a clean 3-tier application architecture.
* Replace MongoDB with PostgreSQL for relational data persistence.
* Containerize frontend, backend, and database components.
* Implement Infrastructure as Code using Terraform.
* Build an automated CI/CD pipeline using Jenkins.
* Integrate source control with GitHub.
* Build and publish Docker images to Azure Container Registry.
* Deploy containerized workloads to Azure Kubernetes Service.
* Implement application and container security scanning.
* Implement health checks and deployment validation.
* Separate application configuration from source code.
* Follow DevOps and DevSecOps best practices.

---

# 🏗️ High-Level Architecture

## Application Architecture

```text
                         ┌─────────────────┐
                         │      Users      │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │  React Frontend │
                         │    + Nginx      │
                         └────────┬────────┘
                                  │
                             REST API
                                  │
                                  ▼
                         ┌─────────────────┐
                         │  Node.js API    │
                         │    Express      │
                         └────────┬────────┘
                                  │
                               SQL
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   PostgreSQL    │
                         │      16         │
                         └─────────────────┘
```

---

# ☁️ Cloud & DevOps Architecture

The production deployment follows a cloud-native approach:

```text
                         ┌──────────────┐
                         │   GitHub     │
                         │ Source Code  │
                         └──────┬───────┘
                                │
                             Webhook
                                │
                                ▼
                     ┌─────────────────────┐
                     │       Jenkins       │
                     │    CI/CD Pipeline   │
                     └──────────┬──────────┘
                                │
              ┌─────────────────┼─────────────────┐
              │                 │                 │
              ▼                 ▼                 ▼
        ┌───────────┐    ┌────────────┐    ┌────────────┐
        │  SonarQube│    │   Trivy    │    │   Tests    │
        │ Code Scan │    │Image Scan  │    │ Unit Tests │
        └───────────┘    └────────────┘    └────────────┘
                                │
                                ▼
                     ┌─────────────────────┐
                     │ Azure Container     │
                     │ Registry (ACR)      │
                     └──────────┬──────────┘
                                │
                                ▼
                     ┌─────────────────────┐
                     │ Azure Kubernetes    │
                     │ Service (AKS)       │
                     └──────────┬──────────┘
                                │
                 ┌──────────────┼──────────────┐
                 ▼              ▼              ▼
           ┌──────────┐   ┌──────────┐   ┌──────────┐
           │ Frontend │   │ Backend  │   │Database  │
           │  Pods    │   │  Pods    │   │ Service  │
           └──────────┘   └──────────┘   └──────────┘
```

Infrastructure is provisioned using **Terraform** and application deployment is automated through Jenkins.

---

# 🧰 Technology Stack

| Layer                  | Technology                                  |
| ---------------------- | ------------------------------------------- |
| Frontend               | React 18                                    |
| Frontend Web Server    | Nginx                                       |
| Backend                | Node.js 20                                  |
| API Framework          | Express.js                                  |
| Database               | PostgreSQL 16                               |
| API Communication      | REST                                        |
| Source Control         | Git / GitHub                                |
| Containerization       | Docker                                      |
| Local Orchestration    | Docker Compose                              |
| CI/CD                  | Jenkins                                     |
| Infrastructure as Code | Terraform                                   |
| Container Registry     | Azure Container Registry                    |
| Container Platform     | Azure Kubernetes Service                    |
| Code Quality           | SonarQube                                   |
| Container Security     | Trivy                                       |
| Cloud Platform         | Microsoft Azure                             |
| Kubernetes Packaging   | Helm                                        |
| Monitoring             | Kubernetes health checks / Azure monitoring |

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
├── deploy/
│   ├── kubernetes/
│   ├── helm/
│   └── scripts/
│
├── terraform/
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   ├── providers.tf
│   └── terraform.tfvars.example
│
├── Jenkinsfile
├── docker-compose.yml
├── .gitignore
├── README.md
└── ...
```

---

# 🔄 Application Workflow

A typical user request follows this flow:

```text
User
  │
  ▼
React UI
  │
  ▼
Nginx
  │
  ▼
Node.js / Express API
  │
  ▼
PostgreSQL
  │
  ▼
API Response
  │
  ▼
React UI
```

The frontend does not directly communicate with PostgreSQL.

All database operations are handled through the backend API.

---

# 🗄️ Database Architecture

ThoughtCanvas uses **PostgreSQL 16** as the primary relational database.

The database stores application data such as:

* Articles
* Authors
* Comments
* Publication information
* Application metadata

The application uses a dedicated database connection layer rather than allowing the frontend to access the database directly.

### Example logical relationship

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
* Relational integrity
* Foreign-key constraints
* Structured querying
* Transaction support
* Better consistency for related entities

---

# 🔐 Configuration & Environment Variables

Application configuration is externalized through environment variables.

Example:

```env
NODE_ENV=production
PORT=5000

DB_HOST=postgres
DB_PORT=5432
DB_NAME=thoughtcanvas
DB_USER=thoughtcanvas_user
DB_PASSWORD=<secure-password>
```

### Important

Sensitive credentials should **never be committed to GitHub**.

For production deployments, secrets should be managed through mechanisms such as:

* Kubernetes Secrets
* Azure Key Vault
* Jenkins Credentials
* Azure managed identities where applicable

---

# 🐳 Local Development with Docker

Docker Compose is used to run the complete application stack locally.

### Start the application

```bash
docker compose up -d --build
```

### Verify running containers

```bash
docker compose ps
```

### View logs

```bash
docker compose logs -f
```

### View backend logs

```bash
docker compose logs -f backend
```

### Stop the application

```bash
docker compose down
```

### Remove containers and volumes

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

# 🩺 Health Check

The backend exposes a health endpoint:

```http
GET /api/health
```

Example:

```bash
curl http://localhost:5000/api/health
```

Expected response:

```json
{
  "status": "healthy"
}
```

This endpoint can be used by:

* Docker health checks
* Kubernetes liveness probes
* Kubernetes readiness probes
* Load balancers
* Monitoring systems
* CI/CD deployment validation

---

# 🔌 REST API

## Posts

| Method | Endpoint         | Description            |
| ------ | ---------------- | ---------------------- |
| GET    | `/api/posts`     | Get published articles |
| GET    | `/api/posts/:id` | Get a specific article |
| POST   | `/api/posts`     | Create an article      |
| PUT    | `/api/posts/:id` | Update an article      |
| DELETE | `/api/posts/:id` | Delete an article      |

## Comments

| Method | Endpoint                     | Description    |
| ------ | ---------------------------- | -------------- |
| GET    | `/api/comments/post/:postId` | Get comments   |
| POST   | `/api/posts/:id/comments`    | Add comment    |
| DELETE | `/api/comments/:id`          | Delete comment |

## Health

| Method | Endpoint      | Description              |
| ------ | ------------- | ------------------------ |
| GET    | `/api/health` | Application health check |

---

# 🔀 Git Branching Strategy

The repository uses separate branches for application development and DevOps implementation.

Example:

```text
main
 │
 ├── feature/*
 │
 ├── bugfix/*
 │
 └── devops
       │
       ├── Docker
       ├── Jenkins
       ├── Terraform
       ├── Kubernetes
       └── Security
```

The `main` branch represents the stable application code.

The `devops` branch contains the DevOps/DevSecOps implementation.

---

# 🚀 CI/CD Pipeline

The Jenkins pipeline automates the application lifecycle.

```text
Developer
    │
    ▼
GitHub Commit
    │
    ▼
GitHub Webhook
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
    ├── Trivy Image Scan
    │
    ├── Docker Push
    │
    ▼
Azure Container Registry
    │
    ▼
AKS Deployment
    │
    ├── Kubernetes Manifest / Helm
    │
    ├── Rollout Validation
    │
    └── Health Verification
    │
    ▼
Production Application
```

---

# 🔒 DevSecOps Implementation

Security is integrated into the CI/CD lifecycle rather than being performed only after deployment.

### Source Code Security

SonarQube is used for:

* Static code analysis
* Code quality checks
* Code smells
* Bugs
* Vulnerability detection
* Maintainability analysis

### Dependency Security

Node.js dependencies are audited as part of the CI process.

Example:

```bash
npm audit
```

### Container Security

Trivy scans Docker images for known vulnerabilities.

Example:

```bash
trivy image <image-name>:<tag>
```

The pipeline can be configured to fail when vulnerabilities exceed the defined severity threshold.

---

# 📦 Docker Image Strategy

Separate images are maintained for the frontend and backend.

Example:

```text
thoughtcanvas-frontend:<build-number>
thoughtcanvas-backend:<build-number>
```

Images should not rely only on the `latest` tag.

Recommended production tagging:

```text
thoughtcanvas-backend:1.0.15
thoughtcanvas-backend:git-8f3a21c
thoughtcanvas-backend:build-125
```

This provides:

* Traceability
* Rollback capability
* Version identification
* Easier debugging

---

# ☁️ Azure Infrastructure

Terraform is used to provision Azure infrastructure.

Typical resources include:

```text
Azure Resource Group
        │
        ├── Azure Container Registry
        │
        ├── Azure Kubernetes Service
        │
        ├── Networking
        │
        └── Monitoring Resources
```

Terraform workflow:

```bash
terraform init

terraform validate

terraform plan

terraform apply
```

Destroy development infrastructure when no longer required:

```bash
terraform destroy
```

Production environments should use appropriate state management, access controls, and approval processes.

---

# ☸️ Kubernetes Deployment

The application is deployed to AKS using Kubernetes workloads.

Typical Kubernetes components include:

```text
AKS Cluster
│
├── Namespace
│
├── Frontend Deployment
│   └── Frontend Pods
│
├── Backend Deployment
│   └── Backend Pods
│
├── Backend Service
│
├── Frontend Service
│
├── ConfigMap
│
├── Secrets
│
└── Ingress / LoadBalancer
```

---

# 🧪 Deployment Validation

After deployment, Jenkins validates the Kubernetes rollout.

Example:

```bash
kubectl rollout status deployment/frontend

kubectl rollout status deployment/backend
```

Verify running workloads:

```bash
kubectl get pods

kubectl get services

kubectl get deployments
```

Application health can then be validated through the application endpoint.

---

# 🔁 Rollback Strategy

Kubernetes provides deployment rollback capabilities.

Example:

```bash
kubectl rollout history deployment/backend
```

Rollback:

```bash
kubectl rollout undo deployment/backend
```

Using immutable Docker image tags makes rollback safer because a previous known-good image can be redeployed.

---

# 📊 Observability & Operations

Production deployments should provide visibility into:

* Application health
* Pod status
* CPU utilization
* Memory utilization
* Container restarts
* Deployment status
* API availability
* Database connectivity
* Application logs

Useful Kubernetes commands:

```bash
kubectl get pods

kubectl describe pod <pod-name>

kubectl logs <pod-name>

kubectl get events

kubectl top pods
```

---

# 🛡️ Production Security Considerations

The production implementation follows these principles:

* Never commit secrets to Git.
* Use Jenkins Credentials for pipeline secrets.
* Use Kubernetes Secrets or Azure Key Vault for runtime secrets.
* Use least-privilege Azure identities.
* Scan source code before deployment.
* Scan Docker images before pushing/deploying.
* Use non-root containers where possible.
* Use immutable image tags.
* Restrict Kubernetes RBAC permissions.
* Keep dependencies and base images updated.
* Expose only required network endpoints.

---

# 📋 Prerequisites

For local development:

* Git
* Docker
* Docker Compose
* Node.js 20+
* npm

For DevOps implementation:

* GitHub account
* Jenkins
* Docker
* Azure CLI
* Terraform
* kubectl
* Helm
* Azure subscription
* Azure Container Registry
* Azure Kubernetes Service
* SonarQube
* Trivy

---

# 🚀 Quick Start

Clone the repository:

```bash
git clone <repository-url>

cd ThoughtCanvas
```

Start the application:

```bash
docker compose up -d --build
```

Verify containers:

```bash
docker compose ps
```

Test the backend:

```bash
curl http://localhost:5000/api/health
```

Open the application:

```text
http://localhost
```

---

# 🧹 Troubleshooting

### Check application logs

```bash
docker compose logs -f
```

### Check PostgreSQL

```bash
docker compose ps
```

### Restart the application

```bash
docker compose restart
```

### Rebuild containers

```bash
docker compose up -d --build
```

### Remove existing containers

```bash
docker compose down
```

### Complete reset

```bash
docker compose down -v
docker compose up -d --build
```

---

# 📈 Future Enhancements

Potential production enhancements include:

* Azure Key Vault integration
* Managed PostgreSQL using Azure Database for PostgreSQL
* Horizontal Pod Autoscaling
* Kubernetes Ingress Controller
* TLS/HTTPS
* Prometheus and Grafana
* Centralized logging
* Application Performance Monitoring
* Database backup and disaster recovery
* Blue/Green or Canary deployments
* GitOps using Argo CD
* Automated database migrations
* Network policies
* Private AKS cluster
* Private ACR endpoints
* Azure Managed Identity
* Automated vulnerability remediation

---

# 🎓 DevOps Learning Outcomes

This project demonstrates practical experience with:

### Development

* React
* Node.js
* Express
* PostgreSQL
* REST APIs

### Containerization

* Docker
* Docker Compose
* Multi-stage builds
* Container networking
* Image versioning

### CI/CD

* Jenkins
* GitHub Webhooks
* Pipeline automation
* Build artifacts
* Automated testing
* Deployment validation

### DevSecOps

* SonarQube
* Trivy
* Dependency scanning
* Container vulnerability scanning
* Quality gates

### Infrastructure as Code

* Terraform
* Azure Resource provisioning
* Infrastructure lifecycle management

### Kubernetes

* AKS
* Deployments
* Services
* ConfigMaps
* Secrets
* Health probes
* Rollouts
* Rollbacks

---

# 🏆 Project Summary

**ThoughtCanvas** demonstrates an end-to-end cloud-native DevSecOps implementation where application development, infrastructure provisioning, security, containerization, continuous integration, and continuous deployment are integrated into a single automated delivery workflow.

The project follows the principle:

```text
Code → Build → Test → Scan → Package → Push → Deploy → Validate → Monitor
```

This architecture provides a foundation for building a scalable, secure, maintainable, and production-ready application delivery platform.

---

## 👨‍💻 Project

**ThoughtCanvas**

**Architecture:** 3-Tier Cloud-Native Application

**Frontend:** React + Nginx

**Backend:** Node.js + Express

**Database:** PostgreSQL

**CI/CD:** Jenkins

**Cloud:** Microsoft Azure

**Container Registry:** Azure Container Registry

**Orchestration:** Azure Kubernetes Service

**IaC:** Terraform

**Security:** SonarQube + Trivy

**Containerization:** Docker

---

> **Built to demonstrate real-world DevOps and DevSecOps engineering practices.**

**Innovate. Automate. Secure. Deploy. 🚀**
