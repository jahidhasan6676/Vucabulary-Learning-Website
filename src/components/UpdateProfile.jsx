import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const UpdateProfile = () => {
    const {updateUserProfile} = useContext(authContext);
    const navigate = useNavigate();
    const handleUpdateSubmit = e =>{
       
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get("name")
        const photo = form.get("photo")
        // console.log(name,photo)

        updateUserProfile({displayName:name, photoURL:photo})
            .then(()=>{
                navigate("/profile")
            })


    }
    return (
        <div className="py-20">
            <div className="glass shadow-md rounded-xl p-6 md:w-[50%] lg:w-[40%] mx-auto">
                <h2 className="text-xl font-semibold text-center">Update Profile Information</h2>

                <form onSubmit={handleUpdateSubmit}>
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
                    <div className="mt-3 ">
                   
                    <button className="btn btn-accent text-white">Update</button>
                    
                    </div>

                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;