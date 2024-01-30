import { useEffect, useState } from "react";
import "./App.css";

// const choices = ["камень", "ножницы", "бумага"];
const choices = [
  {
    title: "камень",
    img: "🪨",
  },
  {
    title: "ножницы",
    img: "✂️",
  },
  {
    title: "бумага",
    img: "🫱",
  },
];

function App() {
  const [computerChoise, setComputerChoise] = useState();
  const [playerChoice, setPlayerChoice] = useState();
  const [result, setResult] = useState();

  const getComputerChoice = () => {
    //генератор случайных чисел от 0 до 2, выбор элемента из массива choices
    setComputerChoise(choices[Math.floor(Math.random() * 3)].title);
  };

  const getWinner = () => {
    //сравнение результатов
    //if (3 проверки результатов с логическими И и ИЛИ) {} else {}
    //сохранить результат в состояние result

    if (playerChoice === computerChoise) {
      setResult("It is draw");
    } else if (
      (playerChoice === "бумага" && computerChoise === "камень") ||
      (playerChoice === "камень" && computerChoise === "ножницы") ||
      (playerChoice === "ножницы" && computerChoise === "бумага")
    ) {
      setResult("You win");
    } else {
      setResult("You lose");
    }
  };

  // в массив зависимостей, чтобы сравнение запускалось заново при изменение выбора игрока или компьютера
  useEffect(() => getWinner(), [playerChoice, computerChoise]);

  return (
    <div>
      {playerChoice && computerChoise ? (
        <h1>{result}</h1>
      ) : (
        <h1>Удачной игры</h1>
      )}

      <h2>Выбор компьютера: {computerChoise}</h2>

      {choices.map((choice) => {
        //при нажатии она будет сохранять значение в состояние playerChoice
        //вызывать функцию определяющую выбор компьютера
        return (
          <button
            key={choice}
            onClick={() => {
              setPlayerChoice(choice.title);
              getComputerChoice();
            }}
          >
            {choice.img}
          </button>
        );
      })}

      <h2>Ваш выбор: {playerChoice}</h2>
    </div>
  );
}

export default App;
