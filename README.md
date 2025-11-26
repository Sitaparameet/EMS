# Employee Management System

A full-featured Employee Management System built using the MERN stack:
MongoDB, Express.js, React.js, and Node.js.

# 🚀 Features
- Add, update, and delete employees
- Employee list with search & filter
- Role & department management
- JWT authentication
- REST API backend
- Modern React UI

📂 Project Structure
=
## EMS – Employee Management System

Full‑stack Employee Management System with:

- **Backend**: Node.js, Express, MongoDB (project folder: `EMS`)
- **Frontend**: React + Vite (project folder: `ems Front`)

This app lets you **add, view, edit, and delete employees** through a simple web UI backed by a REST API.

---

## Project structure

At the root of this repository:

- **`EMS/`** – Node.js / Express backend API
  - `index.js` – server entry point
  - `db.js` – database connection
  - `controllers/employeeController.js` – business logic for employees
  - `models/employeeModel.js` – Mongoose model (or similar) for employees
  - `routers/employeeRouter.js` – routes for employee endpoints
- **`ems Front/`** – React frontend built with Vite
  - `src/App.jsx` – main app component
  - `src/AddEmployee.jsx` – add new employee form
  - `src/AllEmployees.jsx` – list all employees
  - `src/EditEmployee.jsx` – update an existing employee

You’ll typically run **backend and frontend separately** in two terminals.

---

## Prerequisites

- **Node.js** (LTS version recommended)
- **npm** (comes with Node)
- A running **MongoDB** instance (local or cloud, e.g. MongoDB Atlas)

---

## Backend setup (`EMS` folder)

1. Open a terminal in the backend folder:

   ```bash
   cd "EMS"
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment (if required by your code):

   - Create a `.env` file or update configuration to point to your MongoDB connection string, for example:

   ```bash
   # example .env values (adjust as needed)
   MONGODB_URI=mongodb://localhost:27017/ems
   PORT=5000
   ```

4. Start the backend server:

   ```bash
   npm start
   ```

   or (depending on your `package.json`):

   ```bash
   npm run dev
   ```

5. The API will usually be available at something like:

   - `http://localhost:5000`

   with routes such as:

   - `GET /employees`
   - `POST /employees`
   - `PUT /employees/:id`
   - `DELETE /employees/:id`

---

## Frontend setup (`ems Front` folder)

1. In a **separate terminal**, go to the frontend folder:

   cd "ems Front"

2. Install dependencies:

   npm install

3. Start the React dev server:

   npm run dev


4. Open the URL shown in the terminal, usually:

   - `http://localhost:5173`

The frontend will call the backend API (make sure the backend is running). If needed, adjust the API base URL in your React code (for example in `src/AllEmployees.jsx`, `AddEmployee.jsx`, or a shared API helper).

## Development workflow

1. **Start backend** (from `EMS`):

   npm start

2. **Start frontend** (from `ems Front`):

   npm run dev

3. Open the frontend in your browser and use the UI to:

   - Add a new employee
   - View all employees
   - Edit an employee
   - Delete an employee

All operations should be reflected in the database via the backend API.

---

## Folder‑by‑folder summary

### Backend – `EMS`

- **`controllers/employeeController.js`** – handles request logic (create/read/update/delete employees)
- **`models/employeeModel.js`** – defines the employee schema/model
- **`routers/employeeRouter.js`** – maps HTTP routes to controller functions
- **`db.js`** – sets up database connection
- **`index.js`** – bootstraps the Express app, middleware, routes, and server

### Frontend – `ems Front/src`

- **`App.jsx`** – root routing/structure of the app
- **`AllEmployees.jsx`** – fetches and displays the list of employees
- **`AddEmployee.jsx`** – form to create a new employee
- **`EditEmployee.jsx`** – form to edit an existing employee
- **`App.css`** – global styles

---


