import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-black text-white">
            {/* Glowing Portal */}
            <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 animate-pulse shadow-2xl shadow-cyan-500/50"></div>
                <div className="absolute top-4 left-4 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 blur-xl"></div>
            </div>

            {/* Robot */}
            <div className="mt-8">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                </div>
                <div className="w-8 h-16 bg-gray-600 rounded-lg mt-2 mx-auto"></div>
                <div className="w-6 h-4 bg-gray-500 rounded-md mt-1 mx-auto"></div>
            </div>

            {/* Text Content */}
            <h1 className="mt-8 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                404
            </h1>
            <p className="text-lg font-medium text-gray-300 mt-4">
                Oops! Lost in the code.
            </p>
            <p className="text-sm text-gray-400 max-w-sm text-center mt-2">
                The page you're looking for doesn't exist or has been moved. Let's get you back home!
            </p>

            {/* Return Home Button */}
            <Link
                to="/"
                className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-purple-700 hover:scale-105 transition-transform"
            >
                Return Home
            </Link>
        </div>
    );
};

export default ErrorPage;