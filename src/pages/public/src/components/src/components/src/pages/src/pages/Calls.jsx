import React from "react";

export default function Calls() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Chatterly - Calls</h2>
      <ul>
        <li>✅ Bob - Video Call - 15m 0s <em>18/10 at 8:55</em></li>
        <li>❌ Charlie - Audio Call - 8m 0s <em>17/10 at 8:55</em></li>
      </ul>
      <button style={{ backgroundColor: "#6a1b9a", color: "white", padding: "10px", borderRadius: "5px" }}>
        Start a new video call
      </button>
    </div>
  );
}
