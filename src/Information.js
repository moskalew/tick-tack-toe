import React from 'react';
import './Information.css';

const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
  return (
    <div className="information">
      {isDraw
        ? 'Ничья'
        : isGameEnded
        ? `Победитель: ${currentPlayer}`
        : `Ходит: ${currentPlayer}`}
    </div>
  );
};

export default Information;
