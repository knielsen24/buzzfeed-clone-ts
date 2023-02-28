import { Question } from "../../interfaces";

const QuestionBlock = ({
    quizItemId,
    chosenAnswerItems,
    question,
    setChosenAnswerItems,
    setUnansweredQuestionsIds,
    unansweredQuestionsIds,
}: {
    quizItemId: number;
    chosenAnswerItems: string[];
    question: Question;
    setChosenAnswerItems: Function;
    setUnansweredQuestionsIds: Function;
    unansweredQuestionsIds: number[] | undefined;
}) => {
    const handleClick = () => {
        setChosenAnswerItems((prevState: string[]) => [
            ...prevState,
            question.text,
        ]);
        setUnansweredQuestionsIds(
            unansweredQuestionsIds?.filter((id: number) => id !== quizItemId)
        );
    };

    const validPick =
        !chosenAnswerItems?.includes(question.text) &&
        !unansweredQuestionsIds?.includes(quizItemId);

    return (
        <button
            className="question-block"
            onClick={handleClick}
            disabled={validPick}
        >
            <img src={question.image} alt={question.alt} />
            <h3>{question.text}</h3>
            <p>
                <a href={question.image}>{question.credit} </a>
                <a href="https://www.unsplash.com">Unsplash</a>
            </p>
        </button>
    );
};

export default QuestionBlock;
