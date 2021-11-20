import { useState } from "react";
import { Link } from "react-router-dom";
import './Signin.css'

const Signin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getEmail = (e) => {
        setEmail(e.target.value);
    };

    const getPassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSignIn = (e) => {
        e.preventDefault();

    };

    return (
        <> 
            <div className="contaniner-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-md-3 mt-5">
                        <form className="form-container" onSubmit={handleSignIn}>
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" onBlur={getEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onBlur={getPassword} className="form-control" id="exampleInputPassword1"></input>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input> <span className="form-label">Remeber Me</span>
                            </div> 
                            <Link to="/dashboard">
                                <button type="submit" className="btn btn-signin">Sign In</button>
                            </Link>

                        </form>
                    </div>
                </div>
            </div></>
    );
};

export default Signin;