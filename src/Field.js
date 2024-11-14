import React from 'react';
import './Field.css';
import { useDispatch } from 'react-redux';
import { setField, switchPlayer } from './actions';

const Field = ({ field, currentPlayer, isGameEnded }) => {
  const dispatch = useDispatch();

  const handleClick = (index) => {
    if (field[index] === '' && !isGameEnded) {
      dispatch(setField(index, currentPlayer));
      dispatch(switchPlayer());
    }
  };

  return (
    <div className='field'>
      {field.map((cell, index) => (
        <button key={index} className='cell' onClick={() => handleClick(index)}>
          {cell}
        </button>
      ))}
    </div>
  );
};

export { Field };
