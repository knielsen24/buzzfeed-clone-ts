import { Content, Question } from "../../interfaces";
import QuestionBlock from "./QuestionBlock";

const QuestionsBlock = ({
    quizItem,
    setChosenAnswerItems,
    setUnansweredQuestionsIds
}: {
    quizItem: Content;
    setChosenAnswerItems: Function;
    setUnansweredQuestionsIds: Function
}) => {
    return (
        <>
            <h2 className="title-block" id={String(quizItem.id)}>
                {quizItem.title}
            </h2>
            <div className="questions-container">
                {quizItem?.questions.map((question: Question, _index) => (
                    <QuestionBlock
                        key={_index}
                        question={question}
                        setChosenAnswerItems={setChosenAnswerItems}
                        setUnansweredQuestionsIds={setUnansweredQuestionsIds}
                    />
                ))}
            </div>
        </>
    );
};

export default QuestionsBlock;
