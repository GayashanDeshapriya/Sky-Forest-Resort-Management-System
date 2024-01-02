import React from "react";
import "./Dashboard.css";
import DashboardImage from "../assets/DashboardImage.png";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Company name and image */}
      <div className="dashboard-header">
        <h1>Sky Forest</h1>
        <p>Welcome to the Sky Forest Resort</p>
        <img src={DashboardImage} alt="dashboard" className="dashboard-image" />
      </div>
    </div>

    
  );
}

export default Dashboard;
