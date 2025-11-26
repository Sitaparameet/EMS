# EMS (Employee Management System) API

A RESTful API for managing employee data built with Node.js, Express, and MongoDB.

## Issues Fixed

The following issues were resolved to make the API functional:

1. **Fixed express.json middleware** - Added missing parentheses
2. **Added CORS support** - Enabled cross-origin requests
3. **Implemented missing controller functions** - All CRUD operations now work
4. **Added proper error handling** - Better error responses
5. **Added default port fallback** - Server runs on port 3000 if no .env file

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create a .env file** (optional):
   ```bash
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/ems
   ```

3. **Start MongoDB** (make sure MongoDB is running on localhost:27017)

4. **Start the server:**
   ```bash
   npm start
   # or for development with auto-restart:
   npm run dev
   ```

## API Endpoints

### Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Server health check |
| POST | `/employee/store` | Create new employee |
| GET | `/employee/all` | Get all employees |
| POST | `/employee/edit/:id` | Get single employee |
| POST | `/employee/update/:id` | Update employee |
| POST | `/employee/delete/:id` | Delete employee |
| GET | `/employee/search?query=term` | Search employees |

## Request/Response Examples

### Create Employee
```bash
POST /employee/store
Content-Type: application/json

{
  "fname": "John",
  "lname": "Doe", 
  "email": "john.doe@example.com",
  "contact": 1234567890,
  "designation": "Software Developer"
}
```

### Get All Employees
```bash
GET /employee/all
```

### Search Employees
```bash
GET /employee/search?query=John
```

## Testing

Run the test script to verify all endpoints:
```bash
node test-api.js
```

## Database Schema

```javascript
{
  firstName: String,
  lastName: String, 
  email: String,
  contact: Number,
  designation: String
}
``` 