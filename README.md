# Syntexchhub Contact Manager

A full-stack contact management app built with React (Vite), Node.js, Express, and MongoDB. It supports creating, viewing, editing, searching, and deleting contacts, with basic validation and error handling.

## Requirements
- Node.js 18+ and npm
- MongoDB Community Server running locally, or a MongoDB Atlas connection string

## Run the backend
1. Open a terminal in `server/`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and update `MONGO_URI` if needed.
4. Start the server:
   ```bash
   npm run dev
   ```
   API runs at `http://localhost:5000`.

## Run the frontend
1. Open another terminal in `client/`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the URL printed by Vite (usually `http://localhost:5173`).

## API endpoints
- `GET /api/contacts` — list contacts; optional `?search=term`
- `GET /api/contacts/:id` — get one contact
- `POST /api/contacts` — create a contact
- `PUT /api/contacts/:id` — update a contact
- `DELETE /api/contacts/:id` — delete a contact
- `GET /api/health` — health check

## Contact fields
- `name` (required)
- `email` (required, valid email)
- `phone` (required)
- `company` (optional)
- `notes` (optional)

## GitHub submission
Create a public repository named `Syntexchhub_Contact_Manager`, then upload the contents of this folder. Do not upload your `.env` file. The `.gitignore` excludes it.
