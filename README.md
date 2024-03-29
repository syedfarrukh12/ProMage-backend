# ProMage Backend

This is the backend repository for the ProMage project.

## Description

ProMage is a project management tool designed to help teams organize tasks and streamline their workflow.

## Features

- **Project Management**: Create, update, and delete projects.
- **Task Management**: Add, assign, and track tasks within projects.
- **Email Notifications**: Receive email notifications for project updates and task assignments.
- **RESTful API**: Provides a RESTful API for seamless integration with front-end and other applcations applications.
- **Logging Service**: Provides a logging service that keeps track of every action and stores it in databse.

## Technologies Used

- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB**: A NoSQL database for storing project and user data.
- **Mongoose**: An object modeling tool for Node.js that provides a schema-based solution to model application data.
- **Nodemailer**: A module for Node.js applications to allow email sending.
- **Cors**: Middleware for enabling CORS in Express.js applications.
- **Dotenv**: A zero-dependency module that loads environment variables from a `.env` file.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **Body-parser**: Middleware for parsing incoming request bodies in Express.js applications.

## Installation

1. Clone this repository: Clone this repsository using `git clone <repository-url>`
2. Navigate to the project directory: `cd backend`
3. Install dependencies: `npm install`
4. Create a `.env` file in the root directory and add necessary environment variables. A `.env` file is also given already
5. Start the server: `npm run dev`
6. Server will be running on `http://localhost:8000`
