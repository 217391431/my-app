import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // redirect to login if not logged in
    } else {
      // Normally you'd fetch user details from your backend with the token
      // Example: axios.get("/api/user", { headers: { Authorization: `Bearer ${token}` } })
      setUser({ name: "Prince Matsekoleng", email: "prince@example.com" });
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li onClick={() => navigate("/")}>🏠 Home</li>
          <li onClick={() => navigate("/projects")}>📂 Projects</li>
          <li onClick={() => navigate("/settings")}>⚙️ Settings</li>
          <li onClick={handleLogout} className="logout">
            🚪 Logout
          </li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <h1>Welcome, {user ? user.name : "User"} 👋</h1>
        <p>Email: {user ? user.email : "N/A"}</p>

        <div className="dashboard-stats">
          <div className="stat-card">
            <h3>Projects</h3>
            <p>12</p>
          </div>
          <div className="stat-card">
            <h3>Tasks</h3>
            <p>34</p>
          </div>
          <div className="stat-card">
            <h3>Messages</h3>
            <p>5</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
