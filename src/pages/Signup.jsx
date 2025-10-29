import React from "react";

export default function Signup() {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
