import React, { useState } from "react";
import "./loginpage.css";
import { useAuth } from "../../../context/AuthContext/Authenticationcxt";
import { useNavigate } from "react-router-dom";
function Loginpage() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handelsubmit(e) {
    e.preventDefault();
    if (email && password) {
      const userdata = { email: email, password: password };
      login(userdata);
      navigate("/");
    }
  }

  return (
    <div>
      <form onSubmit={handelsubmit}>
        <div className="log">
          <div className="log_content">
            <div className="log_head">
              <h1>Login to Medcare</h1>
            </div>
            <div className="Log_body">
              <div>
                <span>Email Address</span>
                <input
                  required
                  value={email}
                  onChange={(eve) => setEmail(eve.target.value)}
                  type="email"
                  placeholder="enter your email"
                />
              </div>

              <div>
                <span>Password</span>
                <input
                  required
                  value={password}
                  onChange={(eve) => setPassword(eve.target.value)}
                  type="password"
                  placeholder="enter your password"
                />
              </div>
            </div>
            <div className="textandbtn">
              <button className="btn-sign" type="submit">
                {" "}
                sign in{" "}
              </button>
              <p>forgot password</p>
              <p>
                Don't have account? <span>Sign up</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Loginpage;
