# Vibe Coding Backend

A modern backend service built with Bun, Elysia, Drizzle ORM, and MySQL.

## Tech Stack
- **Runtime**: [Bun](https://bun.sh/)
- **Framework**: [ElysiaJS](https://elysiajs.com/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Database**: [MySQL](https://www.mysql.com/)

## Getting Started

### Prerequisites
- [Bun](https://bun.sh/) installed locally.
- [Docker](https://www.docker.com/) (optional, for local development).

### Setup

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/rc4dayyan/vibe-coding.git
    cd vibe-coding
    ```

2.  **Install dependencies**:
    ```bash
    bun install
    ```

3.  **Environment Variables**:
    Copy `.env.example` to `.env` and configure your database credentials.
    ```bash
    cp .env.example .env
    ```

4.  **Run with Docker Compose**:
    ```bash
    docker-compose up -d
    ```

5.  **Run Migrations**:
    ```bash
    bun x drizzle-kit push:mysql
    ```

6.  **Start Development Server**:
    ```bash
    bun run dev
    ```

## API Endpoints

### Health Check
- `GET /health` - Returns service status.

### Users
- `GET /users` - List all users.
- `GET /users/:id` - Get user by ID.
- `POST /users` - Create a new user.
  - Body: `{ "name": "John Doe", "email": "john@example.com" }`

## Project Structure
- `src/app.ts` - Entry point.
- `src/routes/` - API route definitions.
- `src/db/` - Database schema and client.
- `src/config/` - Configuration management.
- `drizzle-migrations/` - Generated migration files.
- `drizzle.config.ts` - Drizzle Kit configuration.
