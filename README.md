# Jansamadhan — Civic Issue Reporting Platform

> Jansamadhan (Jan = People, Samadhan = Solution) is a civic-tech platform designed to bridge the gap between citizens and authorities.

A full-stack civic platform where residents report local issues and admins triage, manage, and resolve them.

This README includes the latest **Admin Issue List UI improvements** (image thumbnail, preview modal, stronger hover clarity, and high-severity highlighting).

---

## 📌 Table of Contents

- What’s New (Admin UI Update)
- Core Features
- Tech Stack
- Architecture (High-Level)
- Project Structure
- Getting Started
- Environment Variables
- API Reference
- Roles & Permissions
- Scripts

---

## 🚀 What’s New (Admin UI Update)

### 1) Admin Issue List Item Redesign

Each issue item now uses a clean two-column layout:

- **Left:** image thumbnail (`~96x96`), rounded corners, `object-cover`
- **Right:** title, description, and meta row (`Category | Department | Severity | Time`)

---

### 2) Hover Clarity Improvement

On issue-card hover:

- All text turns white  
- Background darkens  
- Smooth transitions (`transition-colors`, `duration-200/300`)

---

### 3) Click-to-Preview Image (Modal)

Admins can click the image thumbnail:

- Dark overlay backdrop  
- Centered large image  
- Click outside / ESC to close  
- Smooth animation  

Reusable component:

```
frontend/components/admin/image-preview-modal.tsx
```

---

### 4) High Severity Highlight

For `severityScore > 8.5`:

- Red gradient border  
- Stronger hover effect  
- Priority visibility  

---

## 🧩 Core Features

### 👤 Resident Features

- Report issues with title, description, image, and location  
- AI-based categorization (department, severity)  
- Community feed with upvotes & comments  
- Map-based issue visualization  
- Resolution verification system  

---

### 🛠 Admin Features

- Manage issue lifecycle  
  (`reported → approved → in_progress → resolved`)  
- Edit issue metadata  
- Resolve issues with proof images  
- Admin dashboard with analytics  
- Enhanced issue UI  

---

## 🧑‍💻 Tech Stack

### Frontend

- Next.js (App Router)  
- React + TypeScript  
- Tailwind CSS  
- Clerk (Authentication)  
- Leaflet (Maps)  
- Lucide React (Icons)  

---

### Backend

- Node.js + Express  
- MongoDB (Native Driver / Mongoose hybrid)  
- Clerk Express SDK  
- Cloudinary (Image Upload)  
- n8n + ML Service (AI enrichment)  

---

## 🧠 Architecture (High-Level)

1. User submits issue  
2. Backend processes + enriches (AI + rules)  
3. Data stored in MongoDB  
4. Admin reviews & updates status  
5. Admin resolves with proof  
6. Users verify resolution  

---

## 📁 Project Structure

```text
Jansamadhan/
├── backend/
│   ├── config/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── index.js
│
├── frontend/
│   ├── app/
│   ├── components/
│   │   └── admin/
│   │       ├── issue-list-item.tsx
│   │       └── image-preview-modal.tsx
│   ├── lib/
│   └── next.config.ts
│
└── README.md
```

---

## ⚙️ Getting Started

### 📌 Prerequisites

- Node.js 18+  
- npm 9+  
- MongoDB Database  
- Clerk API Keys  
- Cloudinary Credentials  

---

### 🔧 Installation

```bash
npm install
npm run install:all
```

---

### ▶️ Run Full Stack

```bash
npm run dev
```

- Backend → http://localhost:5500  
- Frontend → http://localhost:3000  

---

### ▶️ Run Backend Only

```bash
cd backend
npm install
npm run dev
```

---

### ▶️ Run Frontend Only

```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

### Backend (`backend/.env`)

```env
PORT=5500
MONGO_URI=
CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
CLOUDINARY_URL=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
N8N_WEBHOOK_URL=
ML_SERVICE_URL=http://127.0.0.1:8000/analyze-severity
ML_CONFIDENCE_THRESHOLD=0.80
```

---

### Frontend (`frontend/.env`)

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/feed
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/feed
NEXT_PUBLIC_BACKEND_URL=http://localhost:5500
SARVAM_API_KEY=
```

---

## 🔗 API Reference

### 📍 Issues

- `POST /api/issues/preview` → AI preview  
- `POST /api/issues` → create issue  
- `GET /api/issues` → list issues  
- `PATCH /api/issues/:id` → update  
- `PATCH /api/issues/:id/resolve` → resolve  
- `PATCH /api/issues/:id/upvote` → upvote  
- `PATCH /api/issues/:id/verify-upvote` → verify  
- `GET /api/issues/:id/comments`  
- `POST /api/issues/:id/comments`  

---

### 👤 Users

- `POST /api/users/sync`  
- `GET /api/users/me`  

---

### 📅 Events

- `GET /api/events`  
- `POST /api/events`  
- `PATCH /api/events/:id/interested`  
- `PATCH /api/events/:id/participating`  

---

## 🔑 Roles & Permissions

### Resident
- Report issues  
- Comment  
- Upvote  
- Verify resolution  

### Admin
- Full access  
- Manage issues  
- Update status  
- Resolve with proof  
- Access analytics  

---

## 📜 Scripts

### Backend

```bash
npm run dev
npm start
```

---

### Frontend

```bash
npm run dev
npm run build
npm start
npm run lint
```

---

## 📌 Notes

- UI update only (no backend API changes)  
- Ensure valid `imageUrl` for best admin experience  

---

## ⭐ Future Enhancements

- Real-time notifications  
- AI duplicate detection  
- Government API integration  
- Mobile app version  

---

## 💡 Author

Built with ❤️ for solving real civic problems.
