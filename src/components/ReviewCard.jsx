import { useEffect, useState } from "react";
import ReviewDetails from "./ReviewDetails";
import Marquee from "react-fast-marquee";



const ReviewCard = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("../reviewData.json")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  return (
    <div className="mt-20">

      <h2 className="text-2xl font-semibold text-center">Learner Feedback</h2>

      <Marquee pauseOnHover={true}>
      <div className="flex ml-6 gap-6">
        {
          data.map((detailsData, index) => <ReviewDetails key={index} detailsData={detailsData}></ReviewDetails>)
        }
      </div>
      </Marquee>

    </div>
  );
};

export default ReviewCard;