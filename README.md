# JKBOSE Clone Project

This is a Full Stack MERN clone of the JKBOSE website.

## Folder Structure
- `backend/`: Node.js + Express API
- `frontend/`: React + Vite Frontend

## Prerequisites
- Node.js installed
- MongoDB installed and running locally on default port (27017)

## Setup & Run

## 1. Backend Setup
```bash
cd backend
npm install
# Create .env file (already done, but ensure it exists)
# PORT=5000
# MONGO_URI=mongodb://localhost:27017/jkbose_clone
# JWT_SECRET=jkbose_secret_key_123

# Run Server
npm run dev
# OR
npx nodemon server.js
```
Server runs on: `http://localhost:5000`

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on: `http://localhost:5173` (or similar)

## Features (Implemented)
- **Public Pages**: Home, About, Academics, Notifications, Results, Downloads, Contact.
- **Admin Panel**: Login at `/admin/login` (Credentials in code: `admin@jkbose.nic.in` / `admin123`).
- **Results Search**: Dummy Roll No `12345`.
- **Marquee**: Live scrolling updates.

## Deployment Guide

### Backend (Render/Heroku/Railway)
1. Push `backend` folder to git.
2. Set Environment Variables (`MONGO_URI`, `JWT_SECRET`) in dashboard.
3. Build Command: `npm install`
4. Start Command: `node server.js`

### Frontend (Vercel/Netlify)
1. Push `frontend` folder to git.
2. Import project in Vercel.
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. *Important*: If using client-side routing, add `_redirects` or `vercel.json` to rewrite all routes to `index.html`.

## API Endpoints
- POST `/api/admin/login`
- GET `/api/notifications`
- POST `/api/results` (Protected)
- GET `/api/results/:rollNo`
