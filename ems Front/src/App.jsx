import React from "react";
import AddEmployee from "./AddEmployee";
import AllEmployees from "./AllEmployees";
import EditEmployee from "./EditEmployee";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <h1>🏢 EMS</h1>
            <span>Employee Management System</span>
          </div>
          <nav className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/allemployees" className="nav-link">Employees</Link>
            <Link to="/addemployee" className="nav-link">Add Employee</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/allemployees" element={<AllEmployees />} />
          <Route path="/editemployee/:id" element={<EditEmployee />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Employee Management System. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}

// HomePage Component
function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Employee Management System</h1>
          <p className="hero-subtitle">
            Streamline your workforce management with our comprehensive employee tracking solution
          </p>
          <div className="hero-buttons">
            <Link to="/allemployees" className="btn btn-primary">View Employees</Link>
            <Link to="/addemployee" className="btn btn-secondary">Add New Employee</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-icon">👥</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Employee Directory</h3>
            <p>Comprehensive employee database with detailed profiles and contact information</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">➕</div>
            <h3>Easy Management</h3>
            <p>Add, edit, and remove employee records with our intuitive interface</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔍</div>
            <h3>Quick Search</h3>
            <p>Find employees quickly with our powerful search and filter capabilities</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Responsive Design</h3>
            <p>Access your employee data from any device with our mobile-friendly interface</p>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="quick-actions">
        <h2 className="section-title">Quick Actions</h2>
        <div className="actions-grid">
          <Link to="/allemployees" className="action-card">
            <div className="action-icon">👥</div>
            <h3>View All Employees</h3>
            <p>Browse your complete employee directory</p>
          </Link>
          <Link to="/addemployee" className="action-card">
            <div className="action-icon">➕</div>
            <h3>Add New Employee</h3>
            <p>Create a new employee profile</p>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">50+</div>
            <div className="stat-label">Employees Managed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">24/7</div>
            <div className="stat-label">System Availability</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">99.9%</div>
            <div className="stat-label">Uptime</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
