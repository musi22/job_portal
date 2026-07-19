# 🎯 JobTaker - Job Portal Platform

A full-stack job portal built with **Next.js** frontend and **Node.js microservices** backend. Features job listings, user profiles, resume management, company pages, skill tracking, and Razorpay payment integration.

## 🎬 Demo

<video src="assets/demo.webp" autoplay loop muted playsinline width="100%"></video>

> *Full walkthrough: Homepage → Jobs → About → Login → Register → Subscribe → Dark Mode*

![Homepage](assets/homepage.png)

---

## 📸 Screenshots

### Jobs Page
![Jobs](assets/jobs.png)

### About Page
![About](assets/about.png)

### Login & Register
| Login | Register |
|-------|----------|
| ![Login](assets/login.png) | ![Register](assets/register.png) |

### Subscribe (Premium)
![Subscribe](assets/subscribe.png)

### Dark Mode
![Dark Mode](assets/dark_mode.png)

---

## 🏗️ Architecture

```
┌──────────────────┐
│   Next.js 16     │  ← Frontend (Port 3000)
│   React 19 + TS  │
└──────┬───────────┘
       │
       ├──► Auth Service    (Port 5000) ── PostgreSQL + Redis + Kafka
       ├──► User Service    (Port 5002) ── PostgreSQL
       ├──► Job Service     (Port 5003) ── PostgreSQL + Kafka
       ├──► Payment Service (Port 5004) ── PostgreSQL + Razorpay
       └──► Utils Service   (Port 5001) ── Kafka Consumer
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ and **npm**
- **Docker & Docker Compose** (for backend services)

### Run Frontend Only

```bash
cd frontend
npm install
npm run dev
```

Opens at **http://localhost:3000**

### Run Full Stack (Docker)

```bash
docker compose up --build
```

This starts PostgreSQL, Redis, Kafka, and all backend services alongside the frontend.

| Service         | URL                    |
|-----------------|------------------------|
| Frontend        | http://localhost:3000   |
| Auth Service    | http://localhost:5000   |
| User Service    | http://localhost:5002   |
| Job Service     | http://localhost:5003   |
| Payment Service | http://localhost:5004   |

---

## 📁 Project Structure

```
job_portal/
├── frontend/                   # Next.js 16 + TypeScript
│   └── src/
│       ├── app/                # Pages (App Router)
│       │   ├── (auth)/         # Login, Register, Forgot, Reset
│       │   ├── about/          # About page
│       │   ├── account/        # User account & profile
│       │   ├── company/[id]/   # Company details
│       │   ├── jobs/           # Job listings + Job detail [id]
│       │   ├── payment/        # Payment success
│       │   └── subscribe/      # Premium subscription
│       ├── components/         # Reusable UI (Shadcn/ui + Radix)
│       ├── context/            # AppContext (global state)
│       └── lib/                # Utilities
│
├── services/
│   ├── auth/                   # Authentication & registration
│   ├── user/                   # Profile & skills management
│   ├── job/                    # Job & company CRUD
│   ├── payment/                # Razorpay checkout & verification
│   └── utils/                  # Kafka consumer
│
├── docker-compose.yml          # Full stack orchestration
└── .env.example                # Environment variable template
```

---

## 📡 API Routes

### Auth Service — `/api/auth` (Port 5000)

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| POST   | `/register`      | Register new user        |
| POST   | `/login`         | Login (returns JWT)      |
| POST   | `/forgot`        | Request password reset   |
| POST   | `/reset/:token`  | Reset password via token |

### User Service — `/api/user` (Port 5002)

| Method | Endpoint            | Description                |
|--------|---------------------|----------------------------|
| GET    | `/me`               | Get current user profile   |
| GET    | `/:userId`          | Get user by ID             |
| PUT    | `/update/profile`   | Update name, phone, bio    |
| PUT    | `/update/pic`       | Upload profile picture     |
| PUT    | `/update/resume`    | Upload resume              |
| POST   | `/skill/add`        | Add skill to profile       |
| PUT    | `/skill/delete`     | Remove skill from profile  |
| POST   | `/apply/job`        | Apply for a job            |
| GET    | `/application/all`  | Get all user applications  |

### Job Service — `/api/job` (Port 5003)

| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| POST   | `/company/new`            | Create a company (with logo)    |
| DELETE | `/company/:companyId`     | Delete a company                |
| GET    | `/company/all`            | Get all companies (recruiter)   |
| GET    | `/company/:id`            | Get company details             |
| POST   | `/new`                    | Create a job listing            |
| PUT    | `/:jobId`                 | Update a job listing            |
| GET    | `/all`                    | Get all active jobs             |
| GET    | `/:jobId`                 | Get single job details          |
| GET    | `/application/:jobId`     | Get applications for a job      |
| PUT    | `/application/update/:id` | Update application status       |

### Payment Service — `/api/payment` (Port 5004)

| Method | Endpoint    | Description              |
|--------|-------------|--------------------------|
| POST   | `/checkout` | Initiate Razorpay payment|
| POST   | `/verify`   | Verify payment signature |

---

## ⚙️ Configuration

Copy `.env.example` and fill in your values:

```env
# Database (PostgreSQL / Neon)
DB_URL=postgresql://user:password@host:5432/jobportal

# Redis
REDIS_URL=redis://:token@host:port

# Kafka
KAFKA_BROKERS=host:port
KAFKA_USERNAME=username
KAFKA_PASSWORD=password

# Auth
JWT_SEC=your-secret-key

# Razorpay
RAZORPAY_KEY_ID=rzp_test_xxxxx
RAZORPAY_SECRET_KEY=xxxxx

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=app-password
```

---

## 🛠️ Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| Frontend     | Next.js 16, React 19, TypeScript    |
| Styling      | Tailwind CSS 4, Shadcn/ui, Radix UI |
| Backend      | Node.js + Express.js (TypeScript)   |
| Database     | PostgreSQL 15                       |
| Cache        | Redis 7                             |
| Message Queue| Apache Kafka                        |
| Payments     | Razorpay                            |
| Containers   | Docker + Docker Compose             |

---

## 🐛 Troubleshooting

**Docker issues:**
```bash
docker compose down -v
docker system prune -a
docker compose up --build
```

**Database connection failed:**
```bash
docker compose logs postgres | tail -20
```

**Kafka errors:**
```bash
docker compose logs zookeeper
docker compose logs kafka
```

---

## 📄 License

ISC
