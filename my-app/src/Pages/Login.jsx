import { useState, useContext } from "react";
import { AppContext } from "./AppContext/Appcontext";
import Log from "react"

function Login() {
    const { loginUser } = useContext(AppContext);
  
    const [formData, setFormData] = useState({
      email: "", // required
      password: "", // required
    });
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:3002/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => loginUser(data.accessToken));
    }
  
    function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    return (
      <Log>
        <h2>Log In</h2>
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="parent_div">
            <div className="email_div">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                value={formData.email}
                name="email"
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="pass_div">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                placeholder="Password"
                value={formData.password}
                name="password"
                onChange={(e) => handleChange(e)}
              ></input>
            </div>
          </div>
  
          <button className="login-btn" type="submit">
            Login
          </button>
        </form>
      </Log>
    );
  }
  
  export default Login;