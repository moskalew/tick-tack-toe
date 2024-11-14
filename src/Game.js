import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Field } from './Field';
import { Information } from './Information';
import './Game.css';
import { resetGame } from './actions';

const Game = () => {
  const { field, currentPlayer, isGameEnded, isDraw, winner } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();

  const handleResetGame = () => {
    dispatch(resetGame());
  };

  return (
    <div className='game'>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
        winner={winner}
      />
      <Field
        field={field}
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
      />
      <div className='button-container'>
        <button onClick={handleResetGame}>Начать заново</button>
      </div>
    </div>
  );
};

export { Game };
