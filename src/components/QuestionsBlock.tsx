import { Content } from "../../interfaces";

const QuestionsBlock = ({ quizItem }: { quizItem: Content }) => {
    return (
        <>
            <h2 id={String(quizItem.id)}>{quizItem.title}</h2>
        </>
    );
};

export default QuestionsBlock;
