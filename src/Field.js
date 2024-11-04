import React from 'react';
import './Field.css';
import { store } from './store';
import { setField, switchPlayer } from './actions';

const Field = ({ field, currentPlayer, isGameEnded }) => {
  const handleClick = (index) => {
    if (field[index] === '' && !isGameEnded) {
      // Проверка, что игра не завершена
      store.dispatch(setField(index, currentPlayer));
      store.dispatch(switchPlayer());
    }
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

export { Field };
