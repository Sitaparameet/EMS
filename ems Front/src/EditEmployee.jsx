import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [designation, setDesignation] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchOneDetails = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/employee/edit/${id}`
      );
      setFirstName(response.data.result.firstName);
      setLastName(response.data.result.lastName);
      setEmail(response.data.result.email);
      setContact(response.data.result.contact);
      setDesignation(response.data.result.designation);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchOneDetails();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = { 
        fname: firstName, 
        lname: lastName, 
        email, 
        contact, 
        designation 
      };
      const response = await axios.put(
        `http://127.0.0.1:5000/employee/update/${id}`,
        data
      );
      alert("Your Record Updated Successfully");
      navigate("/allemployees");
    } catch (e) {
      console.error("Error updating employee:", e);
      alert("Failed to update employee. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Edit Employee</h2>
      <form onSubmit={submitHandler} className="employee-form">
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="contact">Contact</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <input
            type="text"
            id="designation"
            name="designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            Update Employee
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditEmployee;
