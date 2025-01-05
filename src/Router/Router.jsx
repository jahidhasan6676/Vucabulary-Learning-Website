import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import StartLearning from "../Pages/StartLearning";
import Tutorials from "../Pages/Tutorials";
import About from "../Pages/About";
import MyProfile from "../Pages/MyProfile";
import LessonAllCard from "../components/LessonAllCard";

import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../components/UpdateProfile";
import ForgetPassword from "../Authentication/ForgetPassword";


const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
                
            },
            {
                path:"/learning",
                element:
                    <StartLearning></StartLearning>
            },
            {
                path:"/tutorials",
                element:<PrivateRoute>
                    <Tutorials></Tutorials>
                </PrivateRoute>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/profile",
                element:<MyProfile></MyProfile>
                
            },
            {
                path:"/lessonCard/:id",
                element:<PrivateRoute>
                    <LessonAllCard></LessonAllCard>
                </PrivateRoute>,
                loader:()=>fetch("../vocabulary.json")
            },
            
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/updateProfile",
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path:"/forgetPassword",
                element:<ForgetPassword></ForgetPassword>
            }
        ],

        
    },
    
])

export default router;