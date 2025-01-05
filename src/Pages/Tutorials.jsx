import { useNavigate } from "react-router-dom";

const Tutorials = () => {
    const navigate = useNavigate();
    return (
        <div className="py-10">
            <h2 className="text-2xl font-semibold text-center">Watch and Learn Japanese Language</h2>

            {/* youtube video */}
            <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <iframe  className="w-full mx-auto rounded-md" height="315" src="https://www.youtube.com/embed/z4qh8BVrb3w?si=8o71HphZYvFiMjxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                {/* 2nd video */}
                <iframe className="w-full mx-auto rounded-md" width="" height="315" src="https://www.youtube.com/embed/ZziCHf2R_E0?si=BB3GF3dqlUatsjgz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                {/* 3rd video */}
                <iframe className="w-full mx-auto rounded-md" width="" height="315" src="https://www.youtube.com/embed/OK9HRsnDyVw?si=7NBrcVIBTBX32CyX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                {/* 4rth video */}
                <iframe className="w-full mx-auto rounded-md" width="" height="315" src="https://www.youtube.com/embed/TzvwARlCDLs?si=YF0QadE5Nl54oT8z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                {/* 5th video */}
                <iframe className="w-full mx-auto rounded-md" width="" height="315" src="https://www.youtube.com/embed/HyPyRK-Ob_Q?si=Kf6HyS0_XMc1R_d2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                {/* 6th video */}
                <iframe className="w-full mx-auto rounded-md" width="" height="315" src="https://www.youtube.com/embed/2jbQi0-_R88?si=NXot1BdtXMqCWZ9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div>
                <button onClick={()=>navigate("/learning")} className="px-6 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 transition-transform">Learn Vocabularies</button>
            </div>
        </div>
    );
};

export default Tutorials;