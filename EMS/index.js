require("dotenv").config();
const express = require("express");
require("./db");
const port = process.env.PORT || 5000;
const app = express();

// Add CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const employeeRouter = require("./routers/employeeRouter");
app.use("/employee", employeeRouter);

// Add a test route
app.get("/", (req, res) => {
  res.json({ message: "EMS API is running!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
