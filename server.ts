import axios, { AxiosResponse } from "axios";
import express, { Request, Response } from "express";
import { QuizData } from "./interfaces"
import * as dotenv from "dotenv"
dotenv.config()

const PORT = 7000;
const app = express();

app.get("/quiz-item", async (req: Request, res: Response) => {
    try {
        // @ts-ignore
        const response: AxiosResponse = await axios.get(
            "https://b5509121-4759-4647-8931-6a1692f60804-us-west4.apps.astra.datastax.com/api/rest/v2/namespaces/quizzes/collections/quirky_quizzes",
            {
                headers: {
                    "X-Cassandra-Token":
                        process.env.TOKEN,
                    accept: "application/json",
                },
            }
        );
        if (response.status === 200) {
            const quizItem: QuizData = await response.data.data[
                "8d039b1b-e077-4dd8-a0f5-c010b4a3dfb8"
            ];
            res.setHeader(
                "Access-Control-Allow-Origin",
                "http://localhost:3000"
            );
            res.send(quizItem);
        }
    } catch (err) {
        console.error(err);
    }
});

app.listen(PORT, () => console.log("server is running on port" + PORT));
