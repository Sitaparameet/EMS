import axios from "axios";
import React, { useEffect, useState } from "react";

function AllEmployees() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllEmployees = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log("Fetching employees...");
      const response = await axios.get("http://127.0.0.1:5000/employee/all");
      console.log("Response:", response.data);
      setResult(response.data.result);
    } catch (e) {
      console.error("Error fetching employees:", e);
      setError("Failed to fetch employees. Please check if the backend server is running.");
    } finally {
      setLoading(false);
    }
  };

  const deleteRecord = async (id) => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:5000/employee/delete/${id}`
      );
      fetchAllEmployees();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAllEmployees();
  }, []);
  return (
    <>
      <h2 align="center" style={{ position: "relative", top: "30px" }}>
        All Employees
      </h2>
      
      {loading && (
        <div style={{ textAlign: "center", margin: "20px" }}>
          <p>Loading employees...</p>
        </div>
      )}
      
      {error && (
        <div style={{ textAlign: "center", margin: "20px", color: "red" }}>
          <p>{error}</p>
          <button onClick={fetchAllEmployees}>Retry</button>
        </div>
      )}
      
      {!loading && !error && result.length === 0 && (
        <div style={{ textAlign: "center", margin: "20px" }}>
          <p>No employees found. <a href="/addemployee">Add your first employee</a></p>
        </div>
      )}
      
      {!loading && !error && result.length > 0 && (
        <table border={1} align="center" cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <td>Id</td>
              <td>FirstName</td>
              <td>LastName</td>
              <td>Email</td>
              <td>Contact</td>
              <td>Designation</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {result.map((row) => (
              <tr key={row._id}>
                <td>{row._id}</td>
                <td>{row.firstName}</td>
                <td>{row.lastName}</td>
                <td>{row.email}</td>
                <td>{row.contact}</td>
                <td>{row.designation}</td>
                <td>
                  <a href={`/editemployee/${row._id}`}>Edit</a>
                </td>
                <td>
                  <input
                    type="button"
                    value="delete"
                    onClick={() => {
                      deleteRecord(row._id);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default AllEmployees;
