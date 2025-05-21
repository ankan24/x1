 import { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../user.json";

const Login = ({ setIsAuth }: { setIsAuth: (val: boolean) => void }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const isValidUser = users.some(
      (user) => user.username === username && user.password === password
    );

    if (isValidUser) {
      setIsAuth(true);
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;