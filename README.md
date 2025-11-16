# Nextjs Full Stack Template
All dependencies necessary (at least commonly need) for a full-stack project.

## To run this project:
1. Clone this repository `git clone https://github.com/khianvictorycalderon/nextjs-full-stack-template.git`
2. Run `npm install`
3. Run `npm run dev`

---

## Utility Functions
- `utils/db.ts` sets up and exports a PostgreSQL connection pool using environment variables, automatically handling SSL in production.
- `utils/dev-log.ts` provides a simple development-only logging function that logs messages to the console only when in development mode.
- `utils/pg-helper.ts` wraps server-side async functions or database queries, providing consistent error handling, logging in development, and returning a NextResponse with a 500 status on failure.
- `utils/req-helper.ts` is a client-side helper for API requests that wraps async actions with error handling, optional error and final callbacks, and alerts/logs errors in development.

---

## Dependencies & Configuration
The following is a list of installed dependencies and configuration settings used in this project.
You don’t need to install anything manually, as all dependencies are already managed through `package.json`.
This section is provided for reference only, to give you insight into how the project was set up.

## Dependencies
- `npm install pg`
- `npm install --save-dev @types/pg`
- `npm install axios`
- `npm install react-hook-form`
- `npm install dotenv`
- `npm install zod`
- `npm install bcrypt`