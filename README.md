# Job Portal — Local Docker Compose

Quick setup to run the frontend and microservices locally with Docker Compose.

Requirements
- Docker and Docker Compose installed

Start services

```powershell
docker-compose up --build
```

Services exposed
- Frontend: http://localhost:3000
- Auth: http://localhost:5000
- User: http://localhost:5002
- Job: http://localhost:5003
- Payment: http://localhost:5004

Notes
- The services expect environment variables in each service `.env`. The compose file provides a local Postgres, Redis and Kafka. If you need external DB credentials, update the `DB_URL` values in the compose file or use an override env file.
