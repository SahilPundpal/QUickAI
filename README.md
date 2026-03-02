# QuickAI

QuickAI is a full-stack SaaS-style web application that provides multiple AI-powered tools for content creation and image processing through a single unified dashboard. It solves the problem of fragmented AI usage by offering centralized access, usage tracking, and tier-based control.

🚀 **Live Demo:** https://quick-ai-saas.vercel.app/  
📂 **GitHub Repository:** https://github.com/SahilPundpal/QUickAI

---

## 🚀 Features

- Secure authentication and protected routes
- Tier-based usage tracking (Free & Paid plans)
- 7+ AI tools for text and image processing
- Image enhancement and AI-powered content generation
- Handles 100+ AI requests per user session
- Fully deployed and production-ready

---

## 🛠 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Material UI

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL (Neon DB)

### Authentication & Billing
- Clerk (authentication, sessions, protected routes)

### AI Integrations
- Gemini API (text-based AI tools)
- ClipDrop API (image processing tools)

### Deployment
- Vercel

---

## 🧠 System Architecture

- The React frontend communicates with the Node.js backend via REST APIs
- Clerk handles authentication and session management
- Backend validates user tier and usage limits before processing requests
- AI requests are forwarded to Gemini or ClipDrop APIs
- Usage data and user information are stored in PostgreSQL (Neon DB)

---

## 🔐 Authentication & Authorization

- User authentication is handled using Clerk
- Protected routes ensure only authenticated users can access AI tools
- Backend verifies session and user permissions before executing AI requests

---

## 🤖 AI Tools & Integrations

### Gemini API
Used for:
- Content generation
- Text summarization
- Other text-based AI features

### ClipDrop API
Used for:
- Image enhancement
- Image-based AI processing

All AI requests are handled asynchronously to maintain performance.

---

## 📊 Usage Tracking & Billing Logic

- Each user is associated with a subscription plan (free or paid)
- Usage counters are updated on every AI request
- Free users have limited request quotas
- Paid users have higher usage limits
- Requests are blocked when usage limits are exceeded

---

## 🚀 Deployment

- The application is deployed on **Vercel**
- Neon DB provides serverless PostgreSQL with automatic scaling
- Environment variables are used for API keys and secrets

---

## ⚙ Challenges & Learnings

### Challenges
- Managing accurate AI usage tracking
- Preventing excessive or unauthorized API usage
- Integrating multiple AI services in a scalable way

### Learnings
- Building SaaS-style full-stack applications
- AI API integration and optimization
- Secure authentication and access control
- Cloud deployment and environment management

---

## 🔮 Future Improvements

- Add analytics dashboard for users
- Implement caching for repeated AI requests
- Introduce webhook-based billing
- Add role-based access control
- Improve logging and monitoring

---

## 🧪 Getting Started (Local Setup)

```bash
## 🧪 Getting Started (Local Setup)

### 1️⃣ Clone the repository
```bash
git clone https://github.com/SahilPundpal/QUickAI.git
```

### 2️⃣ Setup Backend
```bash
cd server
npm install
npm run dev
```

### 3️⃣ Setup Frontend (in a new terminal)
```bash
cd client
npm install
npm run dev
```

### 4️⃣ Add Environment Variables

Create a `.env` file inside the `server` folder and add:

- Gemini API Key  
- Clerk Keys  
- ClipDrop API Key  
- Neon Database URL  
