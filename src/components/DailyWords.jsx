import React, { useState, useEffect } from "react";


const DailyWords = () => {
   
    const [dailyWord, setDailyWord] = useState(null); 

    useEffect(() => {
        // Fetch the vocabulary data
        fetch("../vocabulary.json")
            .then((res) => res.json())
            .then((data) => {
                setDailyWord(data); 
                const randomWord = data[Math.floor(Math.random() * data.length)];
                setDailyWord(randomWord); 
            })
            .catch((err) => console.error("Error fetching vocabulary:", err));
    }, []);

    // bg-[#eaf5ff]

    return (
        <div className="p-5 text-center bg-violet-50  rounded-md mt-20">
            <h2 className="text-xl font-semibold mb-3">Word of the EveryDay</h2>
            <p className="text-sm font-medium text-center text-gray-500 mb-5">If you refresh, you can see new words, meaning, pronunciation, examples.<br/> From here you can learn new words every day.</p>
            {dailyWord ? (
                <div className=" max-w-[500px] mx-auto space-y-2 px-4 py-6 bg-[#fae8ff] rounded-md mb-2">
                    <p className="animate__animated animate__bounceInLeft"><strong>Word:</strong> {dailyWord.word}</p>
                    <p className="animate__animated animate__bounceInRight"><strong>Pronunciation:</strong> {dailyWord.pronunciation}</p>
                    <p className="animate__animated animate__bounceInLeft"><strong>Meaning:</strong> {dailyWord.meaning}</p>
                    <p className="animate__animated animate__bounceInRight"><strong>Example:</strong> {dailyWord.example}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}

           
        </div>
    );
};

export default DailyWords;
