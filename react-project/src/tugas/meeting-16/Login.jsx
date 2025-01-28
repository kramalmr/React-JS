import { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data.access_token);
        localStorage.setItem("token", response.data.access_token);
        // const token = response.data.token;

        localStorage.token ? navigate("/") : navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data);
        alert(error.response.data);
      });

    setEmail("");
    setPassword("");
  };

  const id = Math.floor(Math.random() * 30);
  const [freeEmail, setFreeEmail] = useState("");
  const [freePassword, setFreePassword] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/users/${id}`)
      .then((response) => {
        setFreeEmail(response.data.email);
        setFreePassword(response.data.password);
      });
  }, []);

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        username: {freeEmail}, password: {freePassword}
      </p>
    </div>
  );
}

export default LoginPage;
