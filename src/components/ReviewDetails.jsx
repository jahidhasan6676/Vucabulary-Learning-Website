import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const ReviewDetails = ({ detailsData }) => {
    const { name, profilePic, review, rating } = detailsData;

    return (
        <div className=" p-5 space-y-3  rounded-md shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300 mt-8 w-[400px] border ">
            <img className="w-20 h-20 rounded-full" src={profilePic} alt="" />
            <p className="text-sm font-medium text-gray-500">{review}</p>
            <h4 className="font-semibold">{name}</h4>

            <div className="flex items-center gap-3 ">  <Rating
                style={{ maxWidth: 100 }}
                value={rating}
                readOnly
            />{rating}</div>
        </div>
    );
};

export default ReviewDetails;