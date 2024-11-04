import React from 'react';
import './Information.css';

const Information = ({ currentPlayer, isGameEnded, isDraw, winner }) => {
  return (
    <div className="information">
      {isDraw
        ? 'Ничья'
        : isGameEnded
        ? `Победитель: ${winner}` // Используем winner вместо currentPlayer
        : `Ходит: ${currentPlayer}`}
    </div>
  );
};

export { Information };
