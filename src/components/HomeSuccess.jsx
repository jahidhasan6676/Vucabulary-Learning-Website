
import CountUp from "react-countup";

const HomeSuccess = () => {
    return (
        <div className="bg-[#f0f8ff] rounded-md mt-20">
            <h2 className="text-2xl font-semibold text-center pt-6"> Highlights of Our Growth</h2>

            <div className="flex justify-around flex-wrap p-8 ">
                {/* User Count */}
                <div>
                    <h3 className="text-[#ff6347] text-[40px]">
                        <CountUp start={0} end={1500} duration={10} separator="," />
                    </h3>
                    <p className="font-medium">Users</p>
                </div>

                {/* Lesson Count */}
                <div>
                    <h3 className="text-[#ffa500] text-[40px]">
                        <CountUp start={0} end={10} duration={10} separator="," />
                    </h3>
                    <p className="font-medium">Lessons</p>
                </div>

                {/* Vocabulary Count */}
                <div>
                    <h3 className="text-[#32cd32] text-[40px]">
                        <CountUp start={0} end={5000} duration={10} separator="," />
                    </h3>
                    <p className="font-medium">Vocabulary Words</p>
                </div>

                {/* Tutorial Count */}
                <div>
                    <h3 className="text-[#4682b4] text-[40px]">
                        <CountUp start={0} end={120} duration={10}  separator="," />
                    </h3>
                    <p className="font-medium">Tutorials</p>
                </div>
            </div>
        </div>
    );
};

export default HomeSuccess;