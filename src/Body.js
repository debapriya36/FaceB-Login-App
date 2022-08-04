import React, { useEffect, useState } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import swal from 'sweetalert';
export default function Body() {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function registerUser(e)
    {
        e.preventDefault();
        swal({
            title: "Register Successful!",
            text: "Congarts!",
            icon: "success",
            button: "Aww yiss!",
          });
          
       let users=JSON.parse(localStorage.getItem('users') || "[]")
        let userInfo={
            name : name,
            username: username,
            password: password
        }
        users.push(userInfo);

        localStorage.setItem('users',JSON.stringify(users));

    }


    return <div>
        <div className="row justify-content-center">
            <div className="col-md-6">
                <img
                    src="https://thumbs.dreamstime.com/b/facebook-related-news-headlines-background-photo-new-friends-global-communication-social-network-global-connecting-36091939.jpg"
                    width='560px' alt=""
                />

            </div>
            <div className="col-md-4">
                <h1>Register</h1>
                <form onSubmit={registerUser}>
             
                <input type="text" placeholder='name' className="form-control" value={name}
                    onChange={(e) => { setName(e.target.value) }}
                />
                <input type="text" placeholder='username' className="form-control" value={username}
                    onChange={(e) => { setUsername(e.target.value) }} />
                <input type="password" placeholder='password' className="form-control" value={password}
                    onChange={(e) => { setPassword(e.target.value) }} />
                <button className="btn btn-primary">SIGN UP</button>
                </form>
            </div>
        </div>

    </div>
}