

const DailyWordsShow = ({words}) => {
    return (
        <div>
            
                <div className="mt-5 text-xl">
                    <p className="animate__animated animate__bounceInLeft">
                        <strong>Word:</strong> {words.word}
                    </p>
                    <p className="animate__animated animate__bounceInRight">
                        <strong>Pronunciation:</strong> {words.pronunciation}
                    </p>
                    <p className="animate__animated animate__bounceInLeft">
                        <strong>Meaning:</strong> {words.meaning}
                    </p>
                    <p className="animate__animated animate__bounceInRight">
                        <strong>Example:</strong> {words.example}
                    </p>
                </div>
          
        </div>
    );
};

export default DailyWordsShow;