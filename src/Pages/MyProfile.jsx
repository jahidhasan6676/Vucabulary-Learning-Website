import { useContext } from "react";

import { authContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const MyProfile = () => {

    const { user } = useContext(authContext)
   



    return ( 
        <div style={{marginTop:"50px"}} className="text-center py-6  mb-14  bg-gray-50 shadow-md rounded-lg max-w-md mx-auto space-y-4">
            
            <h2 className="font-semibold">Welcome, {user?.displayName}!</h2>
            <div className="flex justify-center">
                {
                    user && <img
                    src={user?.photoURL}
                    alt="Profile"
                    className="w-[150px] rounded-[50%] border-4 border-blue-500 shadow-lg"
                />
                }
            </div>
            <p><strong>Name:</strong> {user?.displayName}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <Link to="/updateProfile" className="btn btn-info text-white">
                Update Profile
            </Link>
            </div>
      
    )
};

export default MyProfile;