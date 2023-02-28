import { Content, Question } from "../../interfaces";
import QuestionBlock from "./QuestionBlock";

const QuestionsBlock = ({ quizItem }: { quizItem: Content }) => {
    console.log(quizItem);
    return (
        <>
            <h2 id={String(quizItem.id)}>{quizItem.title}</h2>
            <div className="questions-container">
                {quizItem?.questions.map((question : Question, _index) => (
                    <QuestionBlock
                        key={_index}
                        question={question}
                    />
                ))}
            </div>
        </>
    );
};

export default QuestionsBlock;
