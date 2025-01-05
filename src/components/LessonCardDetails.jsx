import { useNavigate } from "react-router-dom";


const LessonCardDetails = ({ lessonDetails }) => {
    const navigate = useNavigate();
    const { word, meaning,
        when_to_say, example, difficulty, pronunciation, part_of_speech } = lessonDetails;


        const speakWord = (text) => {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = "ja-JP"; 
            utterance.rate = 1; 
            utterance.pitch = 1;
    
            const voices = window.speechSynthesis.getVoices();
            const japaneseVoice = voices.find(voice => voice.lang === "ja-JP");
            if (japaneseVoice) {
                utterance.voice = japaneseVoice;
            }
    
            window.speechSynthesis.speak(utterance); 
        };
    return (
        <div className={` rounded-md p-4 space-y-1 ${difficulty === "easy"
            ? "bg-green-100"
            : difficulty === "medium"
                ? "bg-yellow-100"
                : "bg-red-100"
            }`}>
            <h2 className="text-sm"><span className="font-bold text-sm">Word: </span> {word}</h2>
            <h2 className="text-sm"> <span className="font-bold text-sm">Meaning: </span> {meaning}</h2>
            <h2 className="text-sm"><span className="font-bold text-sm">Pronunciation: </span> {pronunciation}</h2>
            <h2 className="text-sm"><span className="font-bold text-sm">Part_of_speech: </span> {part_of_speech}</h2>
            <div className="flex justify-between pt-4">
                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-accent text-sm text-white">When to say</button>

                <button onClick={()=>speakWord(word)} className="px-3 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold rounded-lg shadow-lg transform hover:translate-y-1 hover:scale-105 transition-all">Speak word</button>
            </div>




            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal">
                <div className="modal-box space-y-1">
                    {/* text */}
                    <h2 className="text-sm"><span className="font-bold text-sm">Word: </span> {word}</h2>
                    <h2 className="text-sm"> <span className="font-bold text-sm">Meaning: </span> {meaning}</h2>
                    <h2 className="text-sm"><span className="font-bold text-sm">When_to_say: </span> {when_to_say}</h2>
                    <h2 className="text-sm"><span className="font-bold text-sm">Example: </span> {example}</h2>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={()=> navigate("/learning")}  className=" px-3 py-2 bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold rounded-lg shadow-md hover:scale-110 hover:shadow-lg transition-all">Back To Lesson</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default LessonCardDetails;