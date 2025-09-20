import { useState } from "react";
import Confetti from "react-confetti";

interface QuizBoxProps {
    question: string;
    correct: string;
    options: string[];
}

export default function QuizBox({ question, options, correct }: QuizBoxProps) {
    const [answer, setAnswer] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [wrongShake, setWrongShake] = useState(false);

    const handleClick = (option: string) => {
        setIsClicked(true);
        setAnswer(option);

        if (option === correct) {
            setIsCorrect(true);
            setWrongShake(false);
        } else {
            setIsCorrect(false);
            setWrongShake(true);

            // remove shake after animation ends
            setTimeout(() => setWrongShake(false), 600);
        }
    };

    return (
        <div
            className={`relative flex flex-col justify-center items-center gap-6 mt-10 mb-20 w-full max-w-2xl mx-auto
        ${isClicked && isCorrect ? "" : "animate-shake"}`}
        >
            {/* Confetti when correct */}
            {isCorrect && (
                <Confetti
                    recycle={false}
                    numberOfPieces={300}
                    gravity={0.3}
                    width={600}
                    height={300}
                />
            )}

            {/* Question */}
            <div className="text-2xl font-bold text-gray-800 leading-relaxed text-center">
                {question}
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
                {options.map((option, idx) => (
                    <label
                        key={idx}
                        className={`p-4 rounded-2xl border-2 cursor-pointer text-center font-medium transition-all duration-200 
              ${answer === option
                                ? "border-blue-600 bg-blue-50 shadow-md"
                                : "border-gray-300 hover:border-blue-300 hover:bg-gray-50"
                            }
              ${isCorrect && option === correct
                                ? "bg-green-100 border-green-500"
                                : ""
                            }
              ${isClicked && option === answer && option !== correct
                                ? "bg-red-100 border-red-500"
                                : ""
                            }`}
                        onClick={() => handleClick(option)}
                    >
                        {/* Hide the radio input */}
                        <input
                            type="radio"
                            name="quiz"
                            value={option}
                            checked={answer === option}
                            onChange={() => handleClick(option)}
                            className="hidden"
                        />
                        {option}
                    </label>
                ))}
            </div>

        </div>
    );
}
