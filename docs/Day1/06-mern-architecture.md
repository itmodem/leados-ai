# LeadOS AI — MERN Architecture

## 1. Technology Stack

### Frontend

React

### Backend

Node.js + Express.js

### Database

MongoDB + MongoDB Atlas

### AI

AI API

---

## 2. High-Level Architecture

```text
                    LEADOS AI
                        │
             ┌──────────┴──────────┐
             │                     │
          FRONTEND              BACKEND
           React              Node.js
             │                Express
             │                     │
             └──────────┬──────────┘
                        │
                    REST APIs
                        │
                    MongoDB
                        │
                  MongoDB Atlas
                        │
                       AI
```

---

## 3. Frontend Responsibilities

React will manage:

* User Interface
* Navigation
* Forms
* Dashboard
* Lead Management
* Lead Profile
* Sales Pipeline
* Activities
* Follow-ups
* Outreach
* Analytics
* AI Assistant

---

## 4. Backend Responsibilities

Node.js + Express will manage:

* Authentication
* REST APIs
* Business Logic
* Lead Scoring
* Database Operations
* AI Integration
* Authorization
* Organization Data Isolation

---

## 5. Database Responsibilities

MongoDB will store:

* Users
* Organizations
* Leads
* Companies
* Contacts
* Activities
* Tasks
* Notes
* Sales data

---

## 6. AI Layer

AI will assist with:

* Lead Research
* Lead Analysis
* Outreach Generation
* Follow-up Generation
* Sales Assistant

---

## 7. AI Architecture Principle

The system should follow:

```text
Lead Data
    ↓
Business Logic
    ↓
Structured Information
    ↓
AI Analysis
    ↓
Recommendation
    ↓
Sales Action
```

The core business logic remains application-owned.

AI is an assistance layer, not the replacement for the application's business logic.

---

## 8. Frontend Folder Structure

Initial structure:

```text
client/
│
├── components/
├── pages/
├── layouts/
├── services/
├── hooks/
├── utils/
├── data/
└── ...
```

---

## 9. Backend Folder Structure

Initial structure:

```text
server/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── services/
├── utils/
├── config/
└── ...
```
