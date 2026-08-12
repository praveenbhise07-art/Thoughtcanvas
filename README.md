# 🛤️ ThoughtCanvas — High-Performance Technical & Blog Platform

A modern, high-performance technical documentation and blog platform built with a 3-tier architecture — React frontend, Node.js backend, and PostgreSQL database.

![Tech Stack](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![Tech Stack](https://img.shields.io/badge/Node.js-20-339933?style=flat-square&logo=node.js)
![Tech Stack](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=flat-square&logo=postgresql)
![Docker](https://img.shields.io/badge/Docker-Containers-2496ED?style=flat-square&logo=docker)

---

> [!IMPORTANT]
> **Looking for the full DevSecOps implementation?**
> Switch to the [`devops`](../../tree/devops) branch for Docker, Kubernetes, Terraform, CI/CD pipelines, container security scanning, and more.
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



## 📁 Project Structure
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

## 🐳 Running with Docker Compose

To run the entire stack locally using containers:

```bash
docker compose up -d --build
Access your application at http://localhost.📡 

## 📡 API Endpoints

- **GET /api/health** - Health check
- **GET /api/posts** - Get all published articles
- **GET /api/posts/:id** - Get single article with comments
- **POST /api/posts** - Publish a new technical article
- **PUT /api/posts/:id** - Update an article
- **DELETE /api/posts/:id** - Delete an article
- **GET /api/comments/post/:postId** - Get comments for a post
- **POST /api/posts/:id/comments** - Add a comment to an article
- **DELETE /api/comments/:id** - Delete a comment

Built with 💜 by the ThoughtCanvas team. Innovate. Deploy. Empower. 🛤️
EOF