

import Banner from "../components/Banner";
import DailyWords from "../components/DailyWords";

import HomeAbout from "../components/HomeAbout";
import HomeSuccess from "../components/HomeSuccess";
import ReviewCard from "../components/ReviewCard";


const Home = () => {
    return (
        <div className="py-14">
           
            <Banner></Banner>
            
           <HomeAbout></HomeAbout>
           <DailyWords></DailyWords>
           <HomeSuccess></HomeSuccess>
           <ReviewCard></ReviewCard>
        </div>
    );
};

export default Home;