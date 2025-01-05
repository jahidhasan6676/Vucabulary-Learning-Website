import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";


const Register = () => {
    const {userRegister,setUser,googlePopup,updateUserProfile} = useContext(authContext);
    const navigate = useNavigate();
    const [error,setError] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        // console.log(name,photo,email,password)

        // clear error message
        setError("");

        // password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!passwordRegex.test(password)){
            setError(
                "Password must contain an uppercase letter, a lowercase letter, and be at least 6 characters long."
              );
              return;
        };
        
        // register user
        userRegister(email,password)
        .then(result => {
            setUser(result.user);
            updateUserProfile({displayName:name, photoURL:photo})
            .then(()=>{
                navigate("/")
                toast.success(`Welcome ${result.user.displayName}!`)
            })
           
        })
        .catch(error =>{
            // console.log(error)
        })
        
    }

    // google Popup
    const handleGooglePopup = () =>{
        googlePopup()
        .then(result => {
            setUser(result.user);
                navigate("/")
                toast.success(`Welcome ${result.user.displayName}!`)
        })
        .catch(error =>{
            // console.log(error)
        })
    }
    return (
        <div className="py-20 " >
            <div className="card  w-full max-w-sm mx-auto glass shadow-md">
                <form onSubmit={handleSubmit}  className="card-body">
                <h3 className='text-xl font-bold text-center mb-4'>Register Your Account</h3>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                       
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL</span>
                        </label>
                        <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" />
                    </div>


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
                            error && <p className='text-xs text-red-500'>{error}</p>
                        }
                        
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        <div className="divider font-semibold">or</div>
                        <button onClick={handleGooglePopup} className=" btn bg-gray-300"><FcGoogle className="text-xl" />Continue With Google</button>
                    </div>
                </form>
                <p className='text-xs ml-8 mb-2'>Already have an account ? <Link to="/login" className='text-green-500 underline'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;