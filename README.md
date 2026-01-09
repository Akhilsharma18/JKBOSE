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

 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on: `http://localhost:5173` (or similar)
