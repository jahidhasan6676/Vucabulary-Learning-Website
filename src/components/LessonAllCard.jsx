import { useLoaderData, useParams } from "react-router-dom";
import LessonCardDetails from "./LessonCardDetails";


const LessonAllCard = () => {
    const vocabularyData = useLoaderData();
    // console.log(vocabularyData)
    const {id} = useParams();
    // console.log( typeof id)

    const vocabularyFilter = vocabularyData.filter(vocabulary => vocabulary.lesson_no === parseInt(id) )
    // console.log(vocabularyFilter)
    return (
        <div className="pt-16 pb-20">
            <h2 className="text-2xl font-semibold text-center">Lesson {vocabularyFilter[0].lesson_no} Words: Learn and Master </h2>

            {/* card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
                {
                    vocabularyFilter.map(word => <LessonCardDetails key={word.id} lessonDetails={word}></LessonCardDetails>)
                }
            </div>
        </div>
    );
};

export default LessonAllCard;