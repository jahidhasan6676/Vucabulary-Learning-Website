import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";



const ForgetPassword = () => {
    const {resetPassword} = useContext(authContext);
    

    const handleResetPassword = e =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email")

        resetPassword(email)
        .then(() =>{
            // toast.success("Password reset email sent! Please check your inbox.");
            e.target.reset(); 
            window.location.href = "https://mail.google.com";
        })
        .catch(error =>{
            // console.log(error)
        })
    }


    return (
        <div className="py-20 bg-gray-100 mt-20  mb-14 rounded-md flex items-center justify-center">
            <div className="glass bg-white shadow-lg p-8 rounded-xl w-[90%] sm:w-[400px]">
                <h2 className="font-semibold text-center">Forget Password</h2>
                <form onSubmit={handleResetPassword}>
                    <div className="form-control">

                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        
                        <button className="btn bg-blue-600 text-white hover:bg-blue-700 w-full py-2 rounded-lg transition mt-3">Reset Password</button>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;