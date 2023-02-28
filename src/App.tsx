import { useState, useEffect } from "react";
import Title from "./components/Title";
import { QuizData, Content } from "../interfaces";
import QuestionsBlock from "./components/QuestionsBlock";

const App = () => {
    const [quiz, setQuiz] = useState<QuizData | null>();

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

    return (
        <div className="App">
            <Title title={quiz?.title} subtitle={quiz?.subtitle} />
            {quiz?.content.map((content: Content, id: Content["id"]) => (
                <QuestionsBlock key={id} quizItem={content} />
            ))}
        </div>
    );
};

export default App;
