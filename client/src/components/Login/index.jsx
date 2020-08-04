import React from 'react';

import Cave from './Cave.jpg';
import './login.css';


import Cave from "./Cave.jpg";
export default function index() {

    return (

        <div class="bg_image">
        
        <div className="container topmiddle">

        
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login Form</h2>
                    <form className="login">
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-default">Login</button>
                    </form>
                    <br />
                    <p>Or sign up <a href="/signup">here</a></p>

        <div
            class="bg_image"
            style={{
                backgroundImage: `url(${Cave})`,
                backgroundSize: "cover",
                height: "100vh",
                color: "#f5f5f5",
                opacity: 0.5
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Login Form</h2>
                        <form className="login">
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="email-input" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="password-input" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-default">Login</button>
                        </form>
                        <br />
                        <p>Or sign up <a href="/signup">here</a></p>
                    </div>

                </div>
            </div>
        </div>
        </div>
    );

}
