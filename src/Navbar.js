import React from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function isValid() {
    let users = JSON.parse(localStorage.getItem("users"));
    let found = 0;
    for (let user of users) {
      if (password === user.password && username === user.username) {
        found = 1;
        localStorage.setItem("loggedIn", "loggedIn");

        swal({
          title: "Login Successful!",
          text: "Congarts!",
          icon: "success",
          button: "Aww yiss!",
        });
        navigate("/dashboard");
        window.location.reload(true);

        break;
      }
    }
    if (!found) {
      swal({
        title: "Invalid username or password!",
        text: "Please check username or password!",
        icon: "error",
        button: "Try again!",
      });
    }
  }


  function logOut()
  {
    localStorage.removeItem('loggedIn');
    swal({
        title: "Logout Successful!",
        text: "Congarts!",
        icon: "success",
        button: "Click me",
      });
    navigate('/');

  }

  return (
    <div>
      <h1>
        <div className="row nav">
          <div className="col-md-6">
            <h1>FaceBook 🫂</h1>
          </div>
          <div className="col-md-6">
            {(() => {
              if (localStorage.getItem("loggedIn")) {
                return <button onClick={logOut} className='btn btn-secondary'><h4> Logout </h4></button>;
              } else {
                return (
                  <div>
                    <h4>
                      <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => {
                          setUsername(e.target.value);
                        }}
                      />
                      <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />

                      <button onClick={isValid} className='btn btn-primary'>LOGIN</button>
                    </h4>
                  </div>
                );
              }
            })()}
          </div>
        </div>
      </h1>
    </div>
  );
}
