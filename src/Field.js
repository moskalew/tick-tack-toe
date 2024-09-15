import React from 'react';
import './Field.css';

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // горизонтали
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // вертикали
  [0, 4, 8],
  [2, 4, 6], // диагонали
];

const Field = ({
  field,
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  setIsDraw,
  setField,
}) => {
  const handleClick = (index) => {
    if (field[index] === '' && !isGameEnded) {
      const newField = field.slice();
      newField[index] = currentPlayer;
      setField(newField);

      // Сначала проверяем, выиграл ли текущий игрок
      if (checkWinner(newField, currentPlayer)) {
        setIsGameEnded(true);
      } else if (!newField.includes('')) {
        // Если нет пустых клеток и никто не выиграл — ничья
        setIsDraw(true);
        setIsGameEnded(true);
      } else {
        // Меняем игрока, если игра продолжается
        setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
      }
    }
  };

  const checkWinner = (newField, player) => {
    return WIN_PATTERNS.some((pattern) => {
      const [a, b, c] = pattern;
      return (
        newField[a] === player &&
        newField[a] === newField[b] &&
        newField[a] === newField[c]
      );
    });
  };

  return (
    <div className="field">
      {field.map((cell, index) => (
        <button key={index} className="cell" onClick={() => handleClick(index)}>
          {cell}
        </button>
      ))}
    </div>
  );
};

export default Field;
