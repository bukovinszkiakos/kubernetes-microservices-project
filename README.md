# ☸️ Kubernetes Microservices Architecture

## 📌 About The Project

This project demonstrates a **microservices-based architecture deployed on Kubernetes**, designed to simulate real-world DevOps practices.

It consists of three independent services (**auth, storage, hr**) with internal communication, scaling, and load balancing using Kubernetes-native resources.

The goal of this project is to showcase:
- Microservices design
- Kubernetes deployments & networking
- Horizontal scaling
- Configuration and secret management

---

## 🧱 Architecture Overview

- 🔐 **Auth Service** – Handles authentication and validation
- 📦 **Storage Service** – Communicates with Auth service
- 🧑‍💼 **HR Service** – Communicates with Auth service
- 🌐 **Nginx Load Balancer** – Public entry point
- 🗄️ **PostgreSQL Databases** – One per service (architecture demonstration)

---

## ✨ Key Features

- ✅ 3 independent microservices
- ✅ Service-to-service communication via Kubernetes DNS
- ✅ Environment-based configuration
- ✅ Kubernetes Deployments & Services
- ✅ Horizontal Pod Autoscaler (HPA)
- ✅ Nginx Load Balancer with ConfigMap
- ✅ Kubernetes Secrets for sensitive data
- ✅ Health checks (liveness & readiness probes)
- ✅ Deployment automation scripts

---

## ⚙️ Tech Stack

- Kubernetes (Minikube)
- Node.js (Express)
- Docker
- Nginx
- PostgreSQL
- Bash scripting

---

## 🚀 Getting Started

### 1️⃣ Start Minikube

```bash
minikube start
```

### 2️⃣ Deploy all resources

```bash
./deploy.sh
```

### 3️⃣ Access the application

```bash
minikube service nginx-loadbalancer
```

---

## 📊 Scaling

Each service is configured with **Horizontal Pod Autoscaler**:

| Service  | Min | Max |
|----------|----|----|
| Auth     | 2  | 6  |
| Storage  | 2  | 5  |
| HR       | 1  | 3  |
| Nginx LB | 1  | 2  |

Scaling is based on CPU utilization.

---

## 🔐 Configuration & Secrets

- **ConfigMap** is used to manage Nginx configuration
- **Secrets** are used for database credentials

> ⚠️ Note: Example credentials are used for demonstration purposes only.

---

## 🧪 Useful Commands

```bash
kubectl get pods
kubectl get services
kubectl logs <pod-name>
kubectl describe pod <pod-name>
```

---

## 🔄 Automation

```bash
./deploy.sh     # Deploy all services
./restart.sh    # Restart all deployments
```

---

## 📌 Notes

- Databases are deployed per service to demonstrate architectural separation
- Full database integration is not implemented intentionally for simplicity
- Designed for learning and demonstration purposes

---

## 🧭 Future Improvements

- 🔐 Secure secret management (Vault / AWS Secrets Manager)
- 📈 Advanced monitoring (Prometheus + Grafana)
- 🚀 CI/CD pipeline (GitHub Actions)
- ☁️ Deploy to AWS EKS
- 🌍 Ingress Controller instead of basic LoadBalancer

---

## 👨‍💻 Developer

**Ákos Bukovinszki**  
https://github.com/bukovinszkiakos

---

## 🛡️ License

MIT License

---

<p align="right">(<a href="#top">Back to top</a>)</p>
