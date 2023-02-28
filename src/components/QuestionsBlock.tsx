import { Content, Question } from "../../interfaces";
import QuestionBlock from "./QuestionBlock";

const QuestionsBlock = ({
    quizItem,
    chosenAnswerItems,
    setChosenAnswerItems,
    setUnansweredQuestionsIds,
    unansweredQuestionsIds,
}: {
    quizItem: Content;
    chosenAnswerItems: string[];
    setChosenAnswerItems: Function;
    setUnansweredQuestionsIds: Function;
    unansweredQuestionsIds: number[] | undefined;
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
                        quizItemId={quizItem.id}
                        question={question}
                        setChosenAnswerItems={setChosenAnswerItems}
                        chosenAnswerItems={chosenAnswerItems}
                        setUnansweredQuestionsIds={setUnansweredQuestionsIds}
                        unansweredQuestionsIds={unansweredQuestionsIds}
                    />
                ))}
            </div>
        </>
    );
};

export default QuestionsBlock;
