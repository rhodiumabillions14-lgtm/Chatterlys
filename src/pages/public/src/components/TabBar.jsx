import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./TabBar.css";

export default function TabBar() {
  const location = useLocation();

  return (
    <div className="tab-bar">
      <Link to="/chat" className={location.pathname === "/chat" ? "active" : ""}>Chat</Link>
      <Link to="/calls" className={location.pathname === "/calls" ? "active" : ""}>Calls</Link>
      <Link to="/ai" className={location.pathname === "/ai" ? "active" : ""}>AI</Link>
      <Link to="/fashion" className={location.pathname === "/fashion" ? "active" : ""}>Fashion</Link>
      <Link to="/profile" className={location.pathname === "/profile" ? "active" : ""}>Profile</Link>
    </div>
  );
}
