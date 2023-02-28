import { useState, useEffect } from "react";
import Title from "./components/Title";
import { QuizData, Content } from "../interfaces";
import QuestionsBlock from "./components/QuestionsBlock";

const App = () => {
    const [quiz, setQuiz] = useState<QuizData | null>();
    const [chosenAnswerItems, setChosenAnswerItems] = useState<string[]>([]);
    const [unansweredQuestionsIds, setUnansweredQuestionsIds] = useState<
        number[] | undefined
    >([]);

    console.log(chosenAnswerItems);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:7000/quiz-item");
            const json = await response.json();
            setQuiz(json);
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const unansweredIds = quiz?.content?.map(({ id }: Content) => id);
        setUnansweredQuestionsIds(unansweredIds);
    }, [quiz]);

    console.log(unansweredQuestionsIds);

    useEffect(() => {
        if (unansweredQuestionsIds) {
            if(unansweredQuestionsIds.length <= 0 && chosenAnswerItems.length >= 1){
                const answerBlock = document.getElementById("answer-block")
                answerBlock?.scrollIntoView({behavior: "smooth"})
            }

            const highestId = Math.min(...unansweredQuestionsIds);
            const highestElement = document.getElementById(String(highestId));
            highestElement?.scrollIntoView({ behavior: "smooth" });
        }
    }, [unansweredQuestionsIds]);

    return (
        <div className="app">
            <Title title={quiz?.title} subtitle={quiz?.subtitle} />
            {quiz?.content.map((content: Content, id: Content["id"]) => (
                <QuestionsBlock
                    key={id}
                    quizItem={content}
                    chosenAnswerItems={chosenAnswerItems}
                    setChosenAnswerItems={setChosenAnswerItems}
                    setUnansweredQuestionsIds={setUnansweredQuestionsIds}
                    unansweredQuestionsIds={unansweredQuestionsIds}
                />
            ))}
        </div>
    );
};

export default App;
