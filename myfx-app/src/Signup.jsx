import { useState } from "react";
import axios from "axios";
import "./App.css";

function Signup() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/signup", formData);
      alert("Signup successful! You can now log in.");
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div className="container">
      <h1>SIGNUP</h1>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="form-group">
        <label for = "username">Username</label>
        <input type="text" name="username" className="form-control"placeholder="Username" onChange={handleChange} required />
        <label>Email</label>
        <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleChange} required />
        <label>Password</label>
        <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleChange} required />
        <button type="submit" className="btn">Signup</button>
        <p>Already have an account? <a href="./Login">Login</a></p>
      </div></form>
    </div>
  );
}

export default Signup;
