import React from 'react';
import { Field } from './Field';
import { Information } from './Information';
import './Game.css';
import { resetGame } from './actions';
import { store } from './store';

const Game = ({ state }) => {
  const handleResetGame = () => {
    store.dispatch(resetGame());
  };

  return (
    <div className="game">
      <Information
        currentPlayer={state.currentPlayer}
        isGameEnded={state.isGameEnded}
        isDraw={state.isDraw}
        winner={state.winner} // Передаем информацию о победителе
      />
      <Field
        field={state.field}
        currentPlayer={state.currentPlayer}
        isGameEnded={state.isGameEnded}
      />
      <div className="button-container">
        <button onClick={handleResetGame}>Начать заново</button>
      </div>
    </div>
  );
};

export { Game };
