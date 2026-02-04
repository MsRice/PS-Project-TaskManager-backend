## Table of contents

- [Overview](#overview)
  - [Scenario](#scenario)
  - [One Grain - Backend](#one-grain---backend)
- [Design Philosophy](#design-philosophy)
- [Tech Stack](#tech-stack)
- [Data Models](#data-models)
  - [Data Models](#data-models)
- [How to Run](#how-to-run)
- [Author](#author)

## Overview

Project - Full-Stack MERN Application (Backend)

### Scenario

You are a full-stack developer hired by a growing startup to lead the development of their new flagship product, “Pro-Tasker”. The vision is to create a modern, collaborative project management tool that is intuitive for single users but powerful enough for small teams. The application must be built from the ground up using the MERN stack, showcasing a secure, robust, and feature-rich backend API, a dynamic and responsive React frontend, and a seamless deployment pipeline.

This capstone project is the culmination of your journey through the MERN stack curriculum. It is designed to challenge you to integrate everything you have learned — from backend architecture and database design to frontend state management and deployment — into a single, polished, and real-world application. You are expected to reuse and expand upon the patterns and code you developed in previous modules, particularly the “TaskMaster” API and the deployment labs.

### One Grain - Backend

The One Grain backend is a RESTful API built with Node.js, Express, and MongoDB (Mongoose) that powers user authentication and task management for the One Grain productivity app.

It is designed with clear data ownership, secure access control, and scalable CRUD patterns, ensuring each user can only access and manage their own data

## Tech Stack

- Runtime: Node.js
- Framework: Express
- Database: MongoDB
- ODM: Mongoose
- Authentication: JWT
- Security: bcrypt
- Environment Management: dotenv

## Data Models

### User Model

Each user owns their tasks and must be authenticated to access them.

Fields:

- email (unique)
- password (hashed)
- createdAt

### Task Model

Tasks are always owned by a user and cannot be accessed without proper authorization.

Fields:

- title
- description (optional)
- area
- todos (subtasks)
- tags
- dueDate
- status
- userId (reference to User)
- createdAt

## How to Run

- Github: https://github.com/MsRice/PS-Project-TaskManager-backend.git
- Render:

## Author

Patrice(Rice 🍚) Maxwell

Backend & Full-Stack Software Engineer

🌐([thegrainofrice.com](https://www.thegrainofrice.com/))

💼([Linkedin](https://www.linkedin.com/in/patrice-maxwell))

🌾 Grain of Rice — Building scalable systems one grain at a time
