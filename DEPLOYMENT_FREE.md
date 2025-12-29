# JobTaker Deployment Guide - Free Tier

## 🚀 Deploy in 15 Minutes Using Free Resources

### Step 1: Frontend (Vercel) - Free Tier ✅

**Time: 2 minutes**

```bash
# Option A: Deploy from GitHub (Recommended)
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Select your job_portal repository
5. Framework: Next.js (auto-detected)
6. Click Deploy

# Option B: Manual Deploy
npm install -g vercel
cd frontend
vercel
```

**Result**: Your frontend is live at `yourusername.vercel.app`

---

### Step 2: PostgreSQL Database (Neon) - Free Tier ✅

**Time: 2 minutes**

```bash
# 1. Go to https://console.neon.tech
# 2. Sign up (free tier includes 0.5GB storage)
# 3. Create new project
# 4. Get connection string: postgresql://user:password@ep-xxx.neon.tech/jobportal
# 5. Copy and save this URL
```

**Free Tier Benefits**:
- ✅ 0.5 GB storage
- ✅ 1 GB transfer/month
- ✅ Unlimited databases
- ✅ Postgres 15

---

### Step 3: Redis Cache (Upstash) - Free Tier ✅

**Time: 2 minutes**

```bash
# 1. Go to https://upstash.com
# 2. Sign up (free tier)
# 3. Create Redis database
# 4. Get connection URL: redis://:token@host:port
# 5. Save the URL
```

**Free Tier Benefits**:
- ✅ 10,000 commands/day
- ✅ 256MB storage
- ✅ Global replicas

---

### Step 4: Message Queue (Upstash Kafka) - Free Tier ✅

**Time: 2 minutes**

```bash
# 1. Go to https://upstash.com (same account)
# 2. Switch to "Kafka" section
# 3. Create Kafka cluster
# 4. Get broker URL and credentials
# 5. Save credentials
```

**Free Tier Benefits**:
- ✅ 10,000 messages/day
- ✅ 100 partitions
- ✅ 30 days retention

---

### Step 5: Backend Services (Railway) - Free Tier ✅

**Time: 5 minutes**

```bash
# Option A: Railway CLI (Easiest)
1. Go to https://railway.app
2. Sign up (free tier: $5 credit/month)
3. Install Railway CLI: npm i -g @railway/cli
4. In your project root:
   railway init
   railway up

# Option B: Connect GitHub
1. Go to Railway dashboard
2. Create new project from GitHub
3. Select job_portal repository
4. Add services (auth, user, job, payment)
5. Connect database and Redis
6. Deploy
```

**Configuration for each service**:

```env
# Auth Service (5000)
PORT=5000
NODE_ENV=production
DB_URL=<NEON_URL>
Redis_url=<UPSTASH_REDIS>
Kafka_Broker=<UPSTASH_KAFKA>
JWT_SEC=your-secret-key-here

# User Service (5002)
PORT=5002
NODE_ENV=production
DB_URL=<NEON_URL>
Redis_url=<UPSTASH_REDIS>

# Job Service (5003)
PORT=5003
NODE_ENV=production
DB_URL=<NEON_URL>
Redis_url=<UPSTASH_REDIS>
Kafka_Broker=<UPSTASH_KAFKA>

# Payment Service (5004)
PORT=5004
NODE_ENV=production
DB_URL=<NEON_URL>
RAZORPAY_KEY=<YOUR_RAZORPAY_TEST_KEY>
RAZORPAY_SECRET=<YOUR_RAZORPAY_SECRET>
```

---

### Step 6: Connect Everything

**Update Frontend Environment Variables** (in Vercel):

```
NEXT_PUBLIC_API_URL=https://your-backend-url.railway.app:5000
NEXT_PUBLIC_USER_URL=https://your-backend-url.railway.app:5002
NEXT_PUBLIC_JOB_URL=https://your-backend-url.railway.app:5003
NEXT_PUBLIC_PAYMENT_URL=https://your-backend-url.railway.app:5004
```

---

## 📊 Free Tier Cost Breakdown

| Service | Provider | Cost | Limit |
|---------|----------|------|-------|
| Frontend | Vercel | **FREE** | 100 GB bandwidth/month |
| Backend | Railway | **FREE** ($5 credit) | 512 MB RAM, shared CPU |
| Database | Neon | **FREE** | 0.5 GB storage |
| Redis | Upstash | **FREE** | 10K commands/day |
| Kafka | Upstash | **FREE** | 10K messages/day |
| **Total Monthly Cost** | | **$0** | Sufficient for MVP |

---

## 🔧 Deployment Checklist

- [ ] Create Neon account and get PostgreSQL URL
- [ ] Create Upstash account and get Redis URL
- [ ] Create Upstash Kafka cluster and get broker URL
- [ ] Create Vercel account and deploy frontend
- [ ] Create Railway account and deploy backend
- [ ] Set environment variables in Vercel
- [ ] Set environment variables in Railway
- [ ] Test API endpoints with frontend
- [ ] Monitor usage in each service dashboard

---

## ⚡ Alternative: All-In-One Railway Deployment

**If you want everything in one place:**

```bash
# Railway supports everything in free tier:
# - Node.js backend
# - PostgreSQL database
# - Redis
# - All connected automatically

railway init
railway add database postgres
railway add redis
railway deploy
```

---

## 📈 Scaling When You Need It

| Metric | Free Tier | Paid Tier | Cost |
|--------|-----------|-----------|------|
| Database | 0.5 GB | Unlimited | $0.25/GB |
| Redis | 10K commands | Unlimited | Pay-as-you-go |
| Backend CPU | Shared | Dedicated | $7/month |
| Bandwidth | 100 GB | Unlimited | $0.25/GB overage |

---

## 🆘 Troubleshooting Free Tier

### Issue: Service goes to sleep
**Solution**: Use Uptime monitoring services (UptimeRobot, Statuscake - free tier)

### Issue: Rate limits on free tier
**Solution**: Upgrade to paid tier or implement caching

### Issue: Database connection errors
**Solution**: Check that Neon allows your IP (auto-allow from Railway)

### Issue: Kafka not working
**Solution**: Upstash Kafka requires SSL - ensure your client has SSL enabled

---

## 🎯 Next Steps

1. **Sign up for all services** (takes 10 minutes)
2. **Deploy frontend to Vercel** (2 minutes)
3. **Deploy backend to Railway** (3 minutes)
4. **Set environment variables** (2 minutes)
5. **Test live deployment** (1 minute)

**Total time: ~15 minutes to go live!**

---

## 🔗 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Railway Dashboard**: https://railway.app
- **Neon Console**: https://console.neon.tech
- **Upstash Console**: https://console.upstash.com
- **Razorpay Test Account**: https://dashboard.razorpay.com

---

**Your JobTaker portal will be live and accessible worldwide, completely free!**
