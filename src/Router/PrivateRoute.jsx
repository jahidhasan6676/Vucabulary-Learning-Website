import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import Loading from "../components/Loading";
import { Navigate, useLocation} from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user,loading } = useContext(authContext);
   const location = useLocation();

    if (loading) {
        return <Loading></Loading>;
    }

    if (user && user?.email) {
        
        return children;
    }
   
        return <Navigate state={location.pathname} to="/login"></Navigate>
    
    

};

export default PrivateRoute;