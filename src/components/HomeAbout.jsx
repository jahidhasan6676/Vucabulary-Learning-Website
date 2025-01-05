import { useNavigate } from "react-router-dom";


const HomeAbout = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-16">
            <h2 className="text-2xl font-semibold text-center">Beginner’s Journey to Mastering Japanese</h2>
            <h6 className="text-sm font-medium text-center text-gray-500 mt-2">Through this website, you can learn new languages in an easy and engaging way. Here, you can learn various tutorials, the meanings of words, and their usage.<br/> This website is designed specifically for absolute beginners. You can start from scratch and learn the entire Japanese language.<br/> The content is divided into lessons, and tutorial videos are provided for better understanding.</h6>
            <div className="flex justify-center gap-8 mt-6 w-full">
                <div className="bg-green-100 p-4 rounded-md">
                    <h4 className="font-medium">Want to see all the lessons?<br />
                     Click the Links... </h4>
                     <button onClick={()=>navigate("/learning")} className="underline text-sm text-purple-400">View Lesson</button>
                </div>
                <div className="bg-orange-100 p-4 rounded-md">
                    <h4 className="font-medium">Want to see all the Tutorials Video?<br />
                     Click the Links... </h4>
                     <button  onClick={()=>navigate("/tutorials")} className="underline text-sm text-yellow-500">Learn Tutorials</button>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;