import logo from '../../assets/logo.png'
import { HashLink as Link } from 'react-router-hash-link';
import './Modal.css'

export const SigninModal = () => {
    return (
        <div className="modal mt-5" id="modalForm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="logo-modal">
                        <img className="logo" src={logo} alt="logo"></img>
                    </div>
                    <div className="modal-body">
                        <h5 className="label-modal">Sign in</h5>
                        <p className="float-start text-modal">Not have an account yet? <a href="/#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#modalFormSignup" className="text-white">Sign Up</a></p>
                        <form className="form-modal">
                            <div className="mb-3 mt-5">
                                <label className="form-label">Email Address</label>
                                <input type="text" className="form-control" id="username" name="username" placeholder="user@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name="password" placeholder="Password" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="form-check-label text-white" htmlFor="rememberMe">Remember me</label>
                            </div>
                            <Link to="/dashboard">
                                <button type="submit" className="btn btn-signin">Sign In</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}