const employeeModel = require("../models/employeeModel");

const store = async (req, res) => {
  try {
    const obj = new employeeModel({
      firstName: req.body.fname,
      lastName: req.body.lname,
      email: req.body.email,
      contact: req.body.contact,
      designation: req.body.designation,
    });
    const employee = await obj.save();
    res.status(201).send({
      Message: "Employee created Succesfully",
      result: employee,
    });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
};

const fetch_all = async (req, res) => {
  try {
    console.log("Fetching all employees...");
    const employees = await employeeModel.find();
    console.log("Found employees:", employees);
    res.status(200).json({
      message: "Employees fetched successfully",
      result: employees,
    });
  } catch (e) {
    console.error("Error fetching employees:", e);
    res.status(500).json({ message: e.message });
  }
};

const fetch_one = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await employeeModel.findById(id);
    res.status(200).json({
      message: "Employee fetched successfully",
      result: employee,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const destroy = async (req, res) => {
  try {
    const id = req.params.id;
    const employee = await employeeModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "Employee deleted successfully",
      result: employee,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
const search = async (req, res) => {};

const update = async (req, res) => {
  try {
    const id = req.params.id;
      const data =
      {
        firstName: req.body.fname,
        lastName: req.body.lname,
        email: req.body.email,
        contact: req.body.contact,
        designation: req.body.designation,
      }
      const employee = await employeeModel.findByIdAndUpdate(id, data, {
        new: true,
      });
    res.status(200).json({
      message: "Employee updated successfully",
      result: employee,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

module.exports = { store, fetch_all, fetch_one, destroy, search,update };
