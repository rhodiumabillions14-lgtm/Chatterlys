import React from "react";

export default function Profile() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Chatterly - Profile</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_blue_bird.jpg/120px-A_small_blue_bird.jpg"
        alt="Profile"
        style={{ borderRadius: "50%", width: "100px", height: "100px" }}
      />
      <h3>Alice</h3>
      <p>No public details.</p>
      <div style={{ marginTop: "20px" }}>
        <button style={{ margin: "10px", padding: "10px" }}>Join or Create Group</button>
        <button style={{ margin: "10px", padding: "10px" }}>Privacy Settings</button>
      </div>
    </div>
  );
}
