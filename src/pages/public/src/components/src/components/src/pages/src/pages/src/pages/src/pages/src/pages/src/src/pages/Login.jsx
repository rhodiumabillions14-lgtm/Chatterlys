import React, { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup successful!");
  };

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login to Chatterly</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ padding: "10px", marginBottom: "10px", width: "100%" }}
      />
      <button onClick={handleLogin} style={{ padding: "10px", marginRight: "10px" }}>
        Login
      </button>
      <button onClick={handleSignup} style={{ padding: "10px" }}>
        Sign Up
      </button>
    </div>
  );
}
