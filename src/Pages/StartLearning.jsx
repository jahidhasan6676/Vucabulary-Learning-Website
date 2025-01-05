import { Link, NavLink } from "react-router-dom";


const StartLearning = () => {
    // https://beneficial-aftermath.surge.sh/

    return (
        <div className="pt-20 pb-14">
            <h1 className="font-bold text-3xl text-center">Lessons Overview</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">

                {/* lesson-1 */}
                <NavLink to={`/lessonCard/${1}`}>
                <div className=" p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-center border border-gray-200">
                    <h3 className="text-xl font-bold ">Lesson-1</h3>
                </div>
                </NavLink>

                {/* lesson-2 */}
                <NavLink to={`/lessonCard/${2}`}>
                <div className=" p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-center border border-gray-200">
                    <h3 className="text-xl font-bold ">Lesson-2</h3>
                </div>
                </NavLink>

                {/* lesson-3 */}
                <NavLink to={`/lessonCard/${3}`}>
                <div className=" p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-center border border-gray-200">
                    <h3 className="text-xl font-bold ">Lesson-3</h3>
                </div>
                </NavLink>

                {/* lesson-4 */}
                <NavLink to={`/lessonCard/${4}`}>
                <div className=" p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-center border border-gray-200">
                    <h3 className="text-xl font-bold ">Lesson-4</h3>
                </div>
                </NavLink>

                {/* lesson-5 */}
                <NavLink to={`/lessonCard/${5}`}> 
                <div className=" p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-center border border-gray-200">
                    <h3 className="text-xl font-bold ">Lesson-5</h3>
                </div>
                </NavLink>

                {/* lesson-6 */}
                <NavLink to={`/lessonCard/${6}`}>
                <div className=" p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-center border border-gray-200">
                    <h3 className="text-xl font-bold ">Lesson-6</h3>
                </div>
                </NavLink>

                {/* lesson-7 */}
                <NavLink to={`/lessonCard/${7}`}>
                <div className=" p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-center border border-gray-200">
                    <h3 className="text-xl font-bold ">Lesson-7</h3>
                </div>
                </NavLink>

                {/* lesson-8 */}
                <NavLink to={`/lessonCard/${8}`}>
                <div className=" p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-center border border-gray-200">
                    <h3 className="text-xl font-bold ">Lesson-8</h3>
                </div>
                </NavLink>

                {/* lesson-9 */}
                <NavLink to={`/lessonCard/${9}`}>
                <div className=" p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-center border border-gray-200">
                    <h3 className="text-xl font-bold ">Lesson-9</h3>
                </div>
                </NavLink>

                {/* lesson-10 */}
                <NavLink to={`/lessonCard/${10}`}>
                <div className=" p-6 bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 text-center border border-gray-200">
                    <h3 className="text-xl font-bold ">Lesson-10</h3>
                </div>
                </NavLink>

            </div>


            <div className="text-center my-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Learn the Alphabet</h2>

                <div className="w-full mx-auto ">
                <iframe className="w-[100%] mx-auto rounded-md"  height="315" src="https://www.youtube.com/embed/vEnQtNcR4iA?si=cbXyGzAp4O1WHqb8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
                </div>
            </div>

            {/* View More Button */}
            <Link to="/tutorials" className="px-6 py-2 text-white font-semibold rounded-lg bg-black border-pink-500 hover:bg-pink-500 hover:text-black hover:shadow-pink-500 hover:scale-105 transition-all"> View More Tutorials </Link>



        </div>
    );
};

export default StartLearning;