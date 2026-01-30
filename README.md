# OmniMind

**Cognitive Governance Platform** — A full-stack social intelligence platform for expert system management, structured debates, and reputation-based consensus building.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
  - [Database Setup](#database-setup)
  - [Running the Application](#running-the-application)
- [API Reference](#api-reference)
- [Core Modules](#core-modules)
  - [Expert System](#expert-system)
  - [Debate & Argument System](#debate--argument-system)
  - [Reputation System](#reputation-system)
  - [Audit & Governance](#audit--governance)
- [Development](#development)
  - [Available Scripts](#available-scripts)
  - [Code Quality](#code-quality)
- [Deployment](#deployment)
- [Security](#security)
- [License](#license)

---

## Overview

OmniMind is an enterprise-grade cognitive governance platform designed to facilitate structured knowledge management through expert systems, evidence-based debates, and transparent reputation tracking. The platform enables organizations to:

- **Define and version expert systems** with scoped domains and permissions
- **Conduct structured debates** with formal argumentation patterns
- **Track contributor reputation** across knowledge domains
- **Maintain complete audit trails** for governance and compliance

---

## Key Features

| Feature | Description |
|---------|-------------|
| **Expert Versioning** | Full version control for expert definitions with rollback support |
| **Dependency Graphs** | Track relationships between experts (requires, recommends, conflicts) |
| **Structured Debates** | Formal argumentation with claims, supports, counters, and synthesis |
| **Evidence Validation** | Citation and data verification with multi-level trust scoring |
| **Reputation Scoring** | Domain-specific reputation with decay and rank progression |
| **Role-Based Access** | Fine-grained permissions at user, expert, and action levels |
| **Audit Logging** | Immutable event log with sensitivity classification |
| **Session Management** | Secure token-based authentication with IP tracking |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                              │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                React 19 + TypeScript                        │ │
│  │  ┌───────────┐ ┌────────────┐ ┌──────────────┐ ┌─────────┐  │ │
│  │  │  Landing  │ │  Dashboard │ │ Debate View  │ │Governance│  │ │
│  │  └───────────┘ └────────────┘ └──────────────┘ └─────────┘  │ │
│  │                                                              │ │
│  │  ┌──────────────┐ ┌──────────────┐ ┌───────────────────────┐│ │
│  │  │TanStack Query│ │  Zustand     │ │  React Router v7      ││ │
│  │  │(Data Fetch)  │ │ (State Mgmt) │ │   (Routing)           ││ │
│  │  └──────────────┘ └──────────────┘ └───────────────────────┘│ │
│  └─────────────────────────────────────────────────────────────┘ │
└────────────────────────────┬────────────────────────────────────┘
                             │ HTTP/REST
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                        API LAYER                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                Express 5 + TypeScript                       │ │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌────────────────┐  │ │
│  │  │   Auth   │ │  Experts │ │ Debates  │ │  Middleware    │  │ │
│  │  │  Routes  │ │  Routes  │ │  Routes  │ │(CORS,Helmet,   │  │ │
│  │  │          │ │          │ │          │ │ Compression)   │  │ │
│  │  └──────────┘ └──────────┘ └──────────┘ └────────────────┘  │ │
│  │                                                              │ │
│  │  ┌──────────────────────────────────────────────────────┐   │ │
│  │  │                     Services                          │   │ │
│  │  │  ┌────────────┐ ┌────────────┐ ┌────────────────────┐│   │ │
│  │  │  │ExpertService│ │DebateService│ │ ReputationService ││   │ │
│  │  │  └────────────┘ └────────────┘ └────────────────────┘│   │ │
│  │  └──────────────────────────────────────────────────────┘   │ │
│  └─────────────────────────────────────────────────────────────┘ │
└────────────────────────────┬────────────────────────────────────┘
                             │ Prisma ORM
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                       DATA LAYER                                 │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │                    PostgreSQL                                │ │
│  │  ┌───────┐ ┌────────┐ ┌────────┐ ┌──────────┐ ┌───────────┐ │ │
│  │  │ Users │ │Experts │ │Debates │ │Arguments │ │Reputation │ │ │
│  │  └───────┘ └────────┘ └────────┘ └──────────┘ └───────────┘ │ │
│  │  ┌──────────┐ ┌──────────┐ ┌─────────┐ ┌──────────────────┐ │ │
│  │  │ Evidence │ │ Sessions │ │  Audit  │ │  SystemSettings  │ │ │
│  │  └──────────┘ └──────────┘ └─────────┘ └──────────────────┘ │ │
│  └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

---

## Technology Stack

### Frontend

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI Framework |
| TypeScript | 5.9.3 | Type Safety |
| Vite | 7.2.4 | Build Tool & Dev Server |
| React Router | 7.13.0 | Client-Side Routing |
| TanStack Query | 5.90.20 | Server State Management |
| Zustand | 5.0.10 | Client State Management |
| React Hook Form | 7.71.1 | Form Handling |
| Zod | 4.3.6 | Schema Validation |
| Axios | 1.13.4 | HTTP Client |

### Backend

| Technology | Version | Purpose |
|------------|---------|---------|
| Node.js | 20+ | Runtime Environment |
| Express | 5.2.1 | HTTP Framework |
| TypeScript | 5.9.3 | Type Safety |
| Prisma | 7.3.0 | ORM & Database Toolkit |
| PostgreSQL | 15+ | Primary Database |
| JWT | 9.0.3 | Authentication Tokens |
| bcryptjs | 3.0.3 | Password Hashing |
| Zod | 4.3.6 | Request Validation |
| Helmet | 8.1.0 | Security Headers |
| Morgan | 1.10.1 | HTTP Logging |

---

## Project Structure

```
omnimind/
├── README.md
├── backend/
│   ├── package.json
│   ├── tsconfig.json
│   ├── prisma/
│   │   ├── schema.prisma          # Database schema definition
│   │   └── seed.ts                # Database seed data
│   └── src/
│       ├── app.ts                 # Express app configuration
│       ├── server.ts              # Server entry point
│       ├── config/                # Environment configuration
│       ├── controllers/           # Request handlers
│       ├── middleware/            # Express middleware
│       │   ├── errorHandler.js    # Global error handler
│       │   └── audit.js           # Request ID & audit logging
│       ├── models/                # Data models
│       ├── routes/                # API route definitions
│       │   ├── auth.ts            # Authentication routes
│       │   ├── experts.ts         # Expert CRUD routes
│       │   └── debates.ts         # Debate management routes
│       ├── services/              # Business logic layer
│       │   └── expertService.ts   # Expert operations
│       ├── types/                 # TypeScript type definitions
│       └── utils/                 # Helper utilities
│
└── frontend/
    ├── package.json
    ├── vite.config.ts
    ├── index.html
    ├── public/                    # Static assets
    └── src/
        ├── main.tsx               # Application entry
        ├── App.tsx                # Root component
        ├── index.css              # Global styles
        ├── assets/                # Images, fonts
        ├── components/            # Shared UI components
        ├── lib/                   # Utilities & helpers
        ├── routes/
        │   ├── auth/              # Authenticated routes
        │   │   ├── Dashboard.tsx  # Main dashboard
        │   │   ├── DebateView.tsx # Debate interface
        │   │   ├── ExpertDetail.tsx # Expert management
        │   │   └── Governance.tsx # Admin governance
        │   └── public/            # Public routes
        │       ├── Landing.tsx    # Marketing landing
        │       └── Login.tsx      # Authentication
        ├── stores/                # Zustand state stores
        └── types/                 # TypeScript interfaces
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

| Requirement | Version | Installation |
|-------------|---------|--------------|
| Node.js | ≥ 20.0.0 | [nodejs.org](https://nodejs.org/) |
| npm | ≥ 10.0.0 | Included with Node.js |
| PostgreSQL | ≥ 15.0 | [postgresql.org](https://www.postgresql.org/download/) |
| Git | Latest | [git-scm.com](https://git-scm.com/) |

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-org/omnimind.git
cd omnimind
```

2. **Install backend dependencies**

```bash
cd backend
npm install
```

3. **Install frontend dependencies**

```bash
cd ../frontend
npm install
```

### Environment Configuration

1. **Backend configuration**

Create `backend/.env` file:

```env
# Server
NODE_ENV=development
PORT=3000
HOST=localhost

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/omnimind?schema=public"

# Authentication
JWT_SECRET=your-secure-secret-key-min-32-chars
JWT_EXPIRES_IN=7d

# CORS
CORS_ORIGIN=http://localhost:5173
```

2. **Frontend configuration** (optional)

Create `frontend/.env` file if needed:

```env
VITE_API_URL=http://localhost:3000/api
```

### Database Setup

1. **Create PostgreSQL database**

```sql
CREATE DATABASE omnimind;
```

2. **Generate Prisma client**

```bash
cd backend
npm run db:generate
```

3. **Push schema to database**

```bash
npm run db:push
```

4. **Seed initial data** (optional)

```bash
npm run db:seed
```

5. **Open Prisma Studio** (database GUI)

```bash
npm run db:studio
```

### Running the Application

1. **Start the backend** (Terminal 1)

```bash
cd backend
npm run dev
```

Backend runs at: `http://localhost:3000`

2. **Start the frontend** (Terminal 2)

```bash
cd frontend
npm run dev
```

Frontend runs at: `http://localhost:5173`

3. **Verify installation**

- Health check: `GET http://localhost:3000/health`
- Frontend: Open `http://localhost:5173` in browser

---

## API Reference

### Base URL

```
http://localhost:3000/api
```

### Authentication

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/auth/register` | POST | Create new user account |
| `/auth/login` | POST | Authenticate user |
| `/auth/logout` | POST | Invalidate session |
| `/auth/me` | GET | Get current user profile |

### Experts

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/experts` | GET | List all experts |
| `/experts` | POST | Create new expert |
| `/experts/:id` | GET | Get expert by ID |
| `/experts/:id` | PUT | Update expert |
| `/experts/:id` | DELETE | Delete expert |
| `/experts/:id/versions` | GET | List expert versions |
| `/experts/:id/versions` | POST | Create new version |

### Debates

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/debates` | GET | List all debates |
| `/debates` | POST | Create new debate |
| `/debates/:id` | GET | Get debate with arguments |
| `/debates/:id/arguments` | POST | Add argument to debate |
| `/debates/:id/status` | PATCH | Update debate status |

### Health Check

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Application health status |

---

## Core Modules

### Expert System

The expert system enables creation and management of versioned knowledge experts:

**Expert Lifecycle:**

```
DRAFT → REVIEW → ACTIVE → DEPRECATED → RETIRED
```

**Key Entities:**

- **Expert**: Root entity with unique slug identifier
- **ExpertVersion**: Versioned logic definitions with scope and permissions
- **ExpertDependency**: Relationships between experts (REQUIRES, RECOMMENDS, CONFLICTS)

### Debate & Argument System

Structured argumentation for knowledge refinement:

**Debate Stages:**

```
OPEN → VOTING → RESOLVED/STALE → CLOSED
```

**Argument Types:**

| Type | Purpose |
|------|---------|
| CLAIM | Primary assertion |
| SUPPORT | Evidence supporting a claim |
| COUNTER | Opposing argument |
| QUESTION | Request for clarification |
| SYNTHESIS | Combined resolution |

**Validation Status:**

```
PENDING → VALIDATED/DISPUTED → REFUTED
```

### Reputation System

Domain-specific contributor reputation tracking:

**Reputation Ranks:**

```
NOVICE → CONTRIBUTOR → EXPERT → AUTHORITY → STEWARD
```

**Scoring Events:**

- ARGUMENT_VALIDATED: Positive delta
- ARGUMENT_REFUTED: Negative delta
- EXPERT_IMPROVED: Positive delta
- DECAY: Time-based score reduction

### Audit & Governance

Complete audit trail for compliance:

**Audit Properties:**

| Property | Description |
|----------|-------------|
| Actor | User or system that performed action |
| Action | Type of operation performed |
| Resource | Entity affected with type and ID |
| State | Previous and new state snapshots |
| Sensitivity | PUBLIC, INTERNAL, CONFIDENTIAL |
| Retention | STANDARD, EXTENDED, PERMANENT |

---

## Development

### Available Scripts

**Backend Scripts:**

| Script | Command | Description |
|--------|---------|-------------|
| Dev Server | `npm run dev` | Start development server with hot reload |
| Build | `npm run build` | Compile TypeScript to JavaScript |
| Start | `npm run start` | Run production build |
| Type Check | `npm run typecheck` | Run TypeScript compiler check |
| Lint | `npm run lint` | Run ESLint |
| Generate | `npm run db:generate` | Generate Prisma client |
| Migrate | `npm run db:migrate` | Run database migrations |
| Push | `npm run db:push` | Push schema changes |
| Studio | `npm run db:studio` | Open Prisma Studio |
| Seed | `npm run db:seed` | Seed database |

**Frontend Scripts:**

| Script | Command | Description |
|--------|---------|-------------|
| Dev Server | `npm run dev` | Start Vite dev server |
| Build | `npm run build` | Build production bundle |
| Preview | `npm run preview` | Preview production build |
| Lint | `npm run lint` | Run ESLint |

### Code Quality

**TypeScript Configuration:**

- Strict mode enabled
- ESM module format
- Path aliases configured

**Linting:**

- ESLint with TypeScript plugin
- React Hooks rules
- React Refresh support

---

## Deployment

### Production Build

1. **Build backend**

```bash
cd backend
npm run build
```

2. **Build frontend**

```bash
cd frontend
npm run build
```

3. **Configure production environment**

Set `NODE_ENV=production` and configure appropriate database credentials.

### Docker Deployment

*(Docker configuration coming soon)*

---

## Security

### Implemented Security Measures

| Measure | Implementation |
|---------|----------------|
| **Password Hashing** | bcryptjs with salt rounds |
| **Authentication** | JWT tokens with expiration |
| **Session Management** | Database-backed sessions with IP tracking |
| **Security Headers** | Helmet middleware |
| **CORS** | Configurable origin whitelist |
| **Input Validation** | Zod schema validation |
| **Request Tracing** | Unique request IDs for audit |
| **Error Handling** | Centralized error processor |

### Security Best Practices

1. Never commit `.env` files
2. Use strong JWT secrets (minimum 32 characters)
3. Enable HTTPS in production
4. Configure appropriate CORS origins
5. Regularly rotate authentication secrets
6. Monitor audit logs for suspicious activity

---

## License

This project is licensed under the ISC License.

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Support

For questions or issues, please open a GitHub issue or contact the development team.
