import React, { useState } from "react";
import { FaHandPaper, FaHandRock, FaHandScissors } from "react-icons/fa";

const choices = [
  { name: "rock", icon: <FaHandRock className='w-[90px] h-[90px] text-yellow-600' /> },
  { name: "paper", icon: <FaHandPaper className='w-[90px] h-[90px] text-yellow-600' /> },
  { name: "scissors", icon: <FaHandScissors className='w-[90px] h-[90px] text-yellow-600' /> },
];

const RPS = () => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const handleClick = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(randomChoice);
    determineWinner(choice.name, randomChoice.name);
  };

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a tie!");
    } else if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
      setResult("You win! 🎉");
      setUserScore((prev) => prev + 1);
    } else {
      setResult("You lose! 😢");
      setComputerScore((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    setUserChoice("");
    setComputerChoice("");
    setResult("");
    // setUserScore("");
    // setComputerScore("");
  };

  return (
    <div className="max-w-[1640px] min-w-[10px] mx-auto sm:px-6 lg:px-8 px-2 py-5">
      <div className="flex flex-col justify-center items-center rounded-[70px] text-white mx-auto bg-gradient-to-bl from-black to-gray-800 pb-4">
        <h1 className="text-6xl font-bold mb-8 text-center mt-4 text-orange-400">Rock Paper Scissors</h1>

        {/* Scoreboard */}
        <div className="flex justify-between items-center w-full max-w-md mb-8 min-w-3">
          <div className="text-center">
            <p className="text-lg font-semibold">You</p>
            <p className="text-3xl font-bold text-green-400">{userScore}</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold">Computer</p>
            <p className="text-3xl font-bold text-red-400">{computerScore}</p>
          </div>
        </div>

        {/* Choices */}
        <div className="flex gap-6 mb-10 w-full max-w-md mb-8 min-w-[2px]">
          {choices.map((choice) => (
            <button
              key={choice.name}
              onClick={() => handleClick(choice)}
              className="bg-black px-4 py-4 m-3 rounded-full border-[20px] border-gray-400 text-4xl transition-transform transform hover:scale-110 hover:border-purple-500 hover:bg-green-200  focus:bg-green-400 focus:border-orange-600 shadow-md"
            >
              {choice.icon}
            </button>
          ))}
        </div>

        {/* Results */}
        {userChoice && (
          <div className="justify-center text-center mt-4">
            <p className="text-4xl mb-2 text-bold text-green-400">
              You chose: </p>
            <p><span className="py-2 text-center font-semibold">{userChoice.icon}</span></p>
            <p className="text-4xl mb-2 text-bold text-orange-500">
              Computer chose: </p>
            <p><span className="py-2 text-center font-semibold">{computerChoice.icon}</span></p>
            <p
              className={`text-6xl font-bold mt-4 transition-all ${
                result.includes("win")
                  ? "text-green-400"
                  : result.includes("lose")
                  ? "text-red-600"
                  : "text-yellow-400"
              }`}
            >
              {result}
            </p>
          </div>
        )}

        {/* Reset */}
        <button
          onClick={resetGame}
          className="mt-8 bg-orange-600 text-black font-bold border-[10px] hover:bg-gradient-to-bl from-black to-gray-800 hover:border-orange-600 hover:text-orange-600 hover:border-[10px] px-4 py-2 rounded-full transition duration-200"
        >
          Reset Round
        </button>
      </div>
    </div>  
  );
};

export default RPS;