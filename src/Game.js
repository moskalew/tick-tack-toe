import React, { useState } from 'react';
import Field from './Field';
import Information from './Information';
import './Game.css'; // создаем отдельный модуль стилей

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(Array(9).fill(''));

  const resetGame = () => {
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
    setField(Array(9).fill(''));
  };

  return (
    <div className="game">
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field
        field={field}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        isGameEnded={isGameEnded}
        setIsGameEnded={setIsGameEnded}
        setIsDraw={setIsDraw}
        setField={setField}
      />
      {/* Отдельный контейнер для кнопки */}
      <div className="button-container">
        <button onClick={resetGame}>Начать заново</button>
      </div>
    </div>
  );
};

export default Game;
