import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { userLogin, setUser, googlePopup } = useContext(authContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        // user login
        userLogin(email, password)
            .then(result => {
                setUser(result.user)
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                // console.log(error.code)
                setError(err.code)
            })
    }

    // google Popup
    const handleGooglePopup = () => {
        googlePopup()
            .then(result => {
                setUser(result.user);
                navigate(location?.state ? location.state : "/")
                toast.success(`Welcome ${result.user.displayName}!`)
            })
            .catch(error => {
                // console.log(error)
            })
    }
    return (
        <div className="card  w-full max-w-sm mx-auto shrink-0 glass shadow-md mt-32 mb-20">
            <form onSubmit={handleLogin} className="card-body">
                <h3 className='text-xl font-bold text-center mb-4'>Login Your Account</h3>
                <div className="form-control">

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    {
                        error && <p className='text-xs text-red-500'>Invalid Email or Password! </p>
                    }

                    <label className="label">
                        <Link to="/forgetPassword" className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button  className="btn btn-primary">Login</button>

                    <div className="divider font-semibold">or</div>
                    <button onClick={handleGooglePopup} className=" btn bg-gray-300"><FcGoogle className="text-xl" />Continue With Google</button>
                </div>
            </form>
            <p className='text-xs ml-8 mb-2'>Don’t have an account ? <Link to="/register" className='text-green-500 underline'>Register</Link></p>

        </div>

    );
};

export default Login;