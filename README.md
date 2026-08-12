# 🛤️ ThoughtCanvas — High-Performance Technical & Blog Platform

A modern, high-performance technical documentation and blog platform built with a 3-tier architecture — React frontend, Node.js backend, and PostgreSQL database.

![Tech Stack](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Tech Stack](https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=node.js)
![Tech Stack](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-Containers-2496ED?style=flat-square&logo=docker)

---

> [!IMPORTANT]
> **Looking for the full DevSecOps implementation?**
> Switch to the [`devops`](../../tree/devops) branch for Docker, Kubernetes (EKS Auto Mode), Terraform, CI/CD with GitHub Actions, container security scanning, and more.
>
> ```bash
> git checkout devops
> ```

---

## ✨ Features

- 📝 **Technical Publishing:** Draft and publish architectural runbooks and articles with rich markdown support.
- 🚀 **Dynamic UI/UX:** Dark-mode glassmorphism styling, gradients, and animated hero elements.
- ✏️ **Full Content Management:** Edit existing articles or remove outdated notes seamlessly.
- 💬 **Interactive Workspace Comments:** Full-width comment sections for review notes, team feedback, and discussions.

## 🏗️ Architecture
──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Frontend   │────▶│   Backend    │────▶│  PostgreSQL  │
│   (React +   │◀────│  (Node.js +  │◀────│              │
│    Nginx)    │     │   Express)   │     │              │
│   Port 80    │     │  Port 5000   │     │  Port 5432   │
└──────────────┘     └──────────────┘     └──────────────┘
## 📁 Project Structure
To create the file in VS Code:

1. Open your **ThoughtCanvas** workspace in VS Code.
2. Click the **New File** icon in the left file explorer sidebar and name it `README.md`.
3. Copy the markdown content below and paste it into your new file, then press `Ctrl + S` (or `Cmd + S` on Mac) to save:

```markdown
# 🛤️ ThoughtCanvas — High-Performance Technical & Blog Platform

A modern, high-performance technical documentation and blog platform built with a 3-tier architecture — React frontend, Node.js backend, and PostgreSQL database[cite: 1].

![Tech Stack](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Tech Stack](https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=node.js)
![Tech Stack](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-Containers-2496ED?style=flat-square&logo=docker)

---

> [!IMPORTANT]
> **Looking for the full DevSecOps implementation?**
> Switch to the [`devops`](../../tree/devops) branch for Docker, Kubernetes (EKS Auto Mode), Terraform, CI/CD with GitHub Actions, container security scanning, and more[cite: 1].
>
> ```bash
> git checkout devops
> ```

---

## ✨ Features

- 📝 **Technical Publishing:** Draft and publish architectural runbooks and articles with rich markdown support[cite: 1].
- 🚀 **Dynamic UI/UX:** Dark-mode glassmorphism styling, gradients, and animated hero elements.
- ✏️ **Full Content Management:** Edit existing articles or remove outdated notes seamlessly[cite: 1].
- 💬 **Interactive Workspace Comments:** Full-width comment sections for review notes, team feedback, and discussions[cite: 1].

## 🏗️ Architecture


```

┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│   Frontend   │────▶│   Backend    │────▶│  PostgreSQL  │
│   (React +   │◀────│  (Node.js +  │◀────│              │
│    Nginx)    │     │   Express)   │     │              │
│   Port 80    │     │  Port 5000   │     │  Port 5432   │
└──────────────┘     └──────────────┘     └──────────────┘

```

## 📁 Project Structure


```

ThoughtCanvas/
├── frontend/                # React (Vite) frontend
│   ├── src/                 # React components, pages & assets
│   ├── nginx.conf           # Custom Nginx proxy & SPA router config
│   ├── Dockerfile           # Multi-stage production container build
│   └── package.json
├── backend/                 # Node.js Express API
│   ├── src/                 # Routes, DB connection & controllers
│   └── package.json
├── deploy/                  # Deployment scripts & configurations
└── README.md

```

---

## 🐳 Running with Docker Compose

To run the entire stack locally using containers:

```bash
docker compose up -d --build

```

Access your application at `http://localhost`.

---

## 🧑‍💻 Local Development (Without Docker)

### Prerequisites

* Node.js 20+


* PostgreSQL 16+



### Backend Setup

```bash
cd backend
npm install

# Configure environment variables
export DB_HOST=localhost
export DB_PORT=5432
export DB_USER=jerney_user
export DB_PASSWORD=jerney_pass_2026
export DB_NAME=jerney_db
export PORT=5000

npm start

```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev

```

The Vite dev server starts on `http://localhost:3000` and proxies `/api` requests to the backend at `http://localhost:5000`.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/api/health` | Health check

 |
| GET | `/api/posts` | Get all published articles

 |
| GET | `/api/posts/:id` | Get single article with comments

 |
| POST | `/api/posts` | Publish a new technical article

 |
| PUT | `/api/posts/:id` | Update an article

 |
| DELETE | `/api/posts/:id` | Delete an article

 |
| GET | `/api/comments/post/:postId` | Get comments for a post

 |
| POST | `/api/posts/:id/comments` | Add a comment to an article |
| DELETE | `/api/comments/:id` | Delete a comment

 |

---

## 🌿 Branch Strategy

| Branch | Purpose |
| --- | --- |
| `main` | Source code + Production Container/EC2 deployment

 |
| `devops` | Full DevSecOps — Docker, Kubernetes (EKS), Terraform, CI/CD pipeline, security scanning

 |

---

Built with 💜 by the ThoughtCanvas team. Innovate. Deploy. Empower. 🛤️

```

```