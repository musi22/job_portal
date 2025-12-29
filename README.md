# 🎯 JobTaker - Modern Microservices Job Portal

A cutting-edge, full-stack job portal platform built with **microservices architecture**. Features a stunning React/Next.js frontend and Node.js backend services for authentication, user management, job listings, and payments.

---

## ✨ Key Features

- 🎨 **Modern UI**: Dark gradient theme with smooth animations and glassmorphism effects
- 🏗️ **Microservices Architecture**: Independent, scalable services
- 🔄 **Real-time Communication**: Kafka-based event-driven messaging
- 💾 **Robust Database**: PostgreSQL with Redis caching layer
- 🔐 **Secure Authentication**: JWT-based auth with bcrypt hashing
- 🐳 **Docker Ready**: Complete Docker Compose setup for zero-config development
- 📱 **Responsive Design**: Works seamlessly on all devices
- 💳 **Payment Processing**: Razorpay integration for subscriptions
- 📄 **Resume Management**: File upload and storage for job seekers

---

## 🚀 Quick Start (30 seconds)

### Prerequisites

- ✅ Docker & Docker Compose installed
- ✅ Git installed
- ✅ 4GB+ RAM available

### Option 1: Docker Compose (Recommended)

```powershell
# Clone the repository
git clone https://github.com/musi22/job_portal.git
cd job_portal

# Start all services
docker compose up --build
```

**Services available:**
| Service | URL | Purpose |
|---------|-----|---------|
| Frontend | http://localhost:3000 | Next.js job portal UI |
| Auth Service | http://localhost:5000 | User registration & JWT |
| User Service | http://localhost:5002 | Profile management |
| Job Service | http://localhost:5003 | Job listings & applications |
| Payment Service | http://localhost:5004 | Razorpay integration |

### Option 2: Local Development

```powershell
# Install frontend dependencies
cd frontend
npm install
npm run dev

# In another terminal, install auth service
cd services/auth
npm install
npm run dev

# Repeat for other services (user, job, payment)
```

---

## 📁 Project Structure

```
job-portal/
├── frontend/                  # Next.js 16 TypeScript frontend
│   ├── src/
│   │   ├── app/              # Route pages
│   │   ├── components/       # Reusable UI components
│   │   ├── context/          # App context & state
│   │   └── lib/              # Utilities
│   └── package.json
│
├── services/                  # Microservices
│   ├── auth/                 # Authentication & registration
│   │   └── src/
│   │       ├── controllers/
│   │       ├── routes/
│   │       ├── middleware/
│   │       └── utils/
│   │
│   ├── user/                 # User profile management
│   ├── job/                  # Job listings & applications
│   ├── payment/              # Payment processing
│   └── utils/                # Kafka consumer & shared utilities
│
├── docker-compose.yml        # Complete stack orchestration
├── .gitignore               # Git exclusions
└── README.md                # This file
```

---

## 🔧 Configuration

### Environment Variables

Each service requires a `.env` file. Example template:

**Frontend** (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

**Services** (`.env`):
```env
PORT=5000
DB_URL=postgres://postgres:postgres@postgres:5432/jobportal
Redis_url=redis://redis:6379
Kafka_Broker=kafka:9092
JWT_SEC=your_secret_key_here
```

### Database & Infrastructure

The `docker-compose.yml` includes:

| Service | Version | Purpose |
|---------|---------|---------|
| PostgreSQL | 15 | Main application database |
| Redis | 7-alpine | Session & cache layer |
| Kafka | 7.4.0 | Message queue for async events |
| Zookeeper | 7.4.0 | Kafka coordinator |

---

## 📦 Tech Stack

### Frontend
- **Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **UI Components**: Shadcn/ui
- **State**: React Context + Custom Hooks
- **HTTP**: Axios

### Backend
- **Runtime**: Node.js 22
- **Framework**: Express.js
- **Language**: TypeScript
- **Database ORM**: Neon (Serverless Postgres)
- **Authentication**: JWT + bcrypt
- **File Upload**: Multer
- **Queue**: KafkaJS

### Infrastructure
- **Containerization**: Docker & Docker Compose
- **Database**: PostgreSQL 15
- **Cache**: Redis 7
- **Message Queue**: Apache Kafka 7.4.0

---

## 🎨 Recent UI Improvements

✅ **Rebranded** from "HireHeaven" to "JobTaker"
✅ **Dark gradient theme** with blue/red accents
✅ **Glassmorphism effects** on cards and forms
✅ **Smooth animations** and transitions
✅ **Enhanced typography** with gradient text
✅ **Improved form inputs** with focus states
✅ **Better visual hierarchy** across all pages

---

## 📚 API Endpoints

### Auth Service (Port 5000)
```
POST /api/auth/register       - Register new user
POST /api/auth/login          - User login
POST /api/auth/logout         - User logout
POST /api/auth/forgot         - Password reset request
POST /api/auth/reset/:token   - Reset password
```

### User Service (Port 5002)
```
GET  /api/users/:id           - Get user profile
PUT  /api/users/:id           - Update profile
POST /api/users/:id/skills    - Add skills
GET  /api/users/:id/skills    - Get user skills
```

### Job Service (Port 5003)
```
GET  /api/jobs                - List all jobs
GET  /api/jobs/:id            - Get job details
POST /api/jobs                - Post new job
POST /api/jobs/:id/apply      - Apply for job
GET  /api/jobs/:id/applications - View applications
```

### Payment Service (Port 5004)
```
POST /api/payment/subscribe   - Create subscription
POST /api/payment/verify      - Verify payment
GET  /api/payment/status/:id  - Check payment status
```

---

## 🚀 Deployment

### Deploy with Docker (Production)

```bash
docker build -t jobtaker-frontend ./frontend
docker run -p 3000:3000 jobtaker-frontend

# For services
docker build -t jobtaker-auth ./services/auth
docker run -p 5000:5000 jobtaker-auth
```

### Deploy to Cloud

- **Frontend**: Vercel, Netlify, AWS S3 + CloudFront
- **Backend**: AWS ECS, Heroku, Railway, DigitalOcean App Platform
- **Database**: AWS RDS, Heroku Postgres, Neon
- **Cache**: AWS ElastiCache, Heroku Redis

---

## 🐛 Troubleshooting

### Issue: Docker build fails
```bash
# Clear Docker cache and rebuild
docker compose down -v
docker compose up --build
```

### Issue: Port already in use
```bash
# Change port in docker-compose.yml or kill existing process
lsof -i :3000  # Check what's using port 3000
```

### Issue: Database connection error
```bash
# Wait for PostgreSQL to start fully
docker compose logs postgres
# Ensure DB_URL is correct in .env
```

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📝 License

This project is open source and available under the **ISC License**.

---

## 📧 Support & Contact

- **Email**: support@jobtaker.com
- **Issues**: [GitHub Issues](https://github.com/musi22/job_portal/issues)
- **Discussions**: [GitHub Discussions](https://github.com/musi22/job_portal/discussions)

---

## 🎉 Built with ❤️ by the JobTaker Team

Star ⭐ this repo if you find it helpful!

---

**Last Updated**: December 29, 2025
**Version**: 1.0.0
