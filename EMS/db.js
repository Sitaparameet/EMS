const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/ems")
  .then(() => {
    console.log("Database Connected Successfully");
  })
  .catch((e) => {
    console.error("Database connection failed:", e.message);
    console.log("Make sure MongoDB is running on localhost:27017");
  });
