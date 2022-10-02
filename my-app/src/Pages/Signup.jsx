import { useState } from "react";
import { NavLink } from "react-router-dom";
import Sign from "react"

function Signup(props) {
    const [formData, setFormData] = useState({
      email: "", // required
      password: "", // required
      username: "", // optional
    });
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  
    function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    return (
      <Sign>
        <div className="sign_one">
          <div className="signup_logo" onClick={() => props.setLoginTheme(false)}>
            <NavLink to="/">
              <img src="./images/lightlogo.svg" alt="logo" />
            </NavLink>
          </div>
          <h1>Sign up for free</h1>
          <p>
            Start sending beautifully designed emails today with our drag-and-drop
            editor and library of free templates.
          </p>
        </div>
        <br />
        <br />
        <br />
        {/*  */}
        <div className="sign_two">
          <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
            <div className="parent_div">
              {/* username */}
              <div className="user_div">
                <label htmlFor="username">USERNAME</label>
                <input
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  name="username"
                  onChange={(e) => handleChange(e)}
                ></input>
              </div>
              <br />
              <br />
              <br />
              {/* email */}
              <div className="email_div">
                <label htmlFor="email">EMAIl</label>
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
              {/* password */}
              <div className="pass_div">
                <label htmlFor="password">PASSWORD</label>
                <input
                  type="text"
                  placeholder="Password"
                  value={formData.password}
                  name="password"
                  onChange={(e) => handleChange(e)}
                ></input>
              </div>
            </div>
            <br />
            <br />
  
            <button className="signup-btn" type="submit">
              Create My Account
            </button>
            <br />
            <br />
            <p className="para">
              To find out more about how we're using the information you're giving
              us, please review our <span> privacy statement.</span>
            </p>
          </form>
        </div>
      </Sign>
    );
  }
  
  export default Signup;