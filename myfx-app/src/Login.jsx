import { useState } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", formData);
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  return (
    <div className="container-login">
      <h1>LOGIN</h1>
      <form className="form-login" onSubmit={handleSubmit}>
        <input className="input-login" type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input  className="input-login" type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button  className="input-login" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
