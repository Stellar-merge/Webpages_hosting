import { useState, useEffect } from 'react'
import QuizBox from '../components/QuizBox';
import axios from 'axios'

export default function Quiz() {
    let [question, setQuestion] = useState<string[]>([]);
    let [options, setOptions] = useState<string[][]>([]);
    let [answer, setAnswer] = useState("");

    useEffect(() => {
        axios.get('http://localhost:5000/api/quiz')
            .then(response => {
                console.log(response.data);
                // setQuestion(response.data[0].question);  
                setQuestion(response.data.map((item: { question: string; }) => item.question));
                // setOptions(response.data[0].options);
                setOptions(response.data.map((item: { options: string[]; }) => item.options));
                // setAnswer(response.data[0].answer);
                setAnswer(response.data.map((item: { answer: string; }) => item.answer));
            }
            )
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <>
            {question.map((q, index) => (
                <QuizBox key={index} question={q} correct={answer[index]} options={options[index]} />
            ))}
        </>
    )
}   