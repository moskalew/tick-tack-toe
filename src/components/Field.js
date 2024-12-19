import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cell from './Cell';
import {
  updateField,
  setGameStatus,
  setDraw,
  switchPlayer,
} from '../redux/actions/gameActions';

const Field = ({
  field,
  currentPlayer,
  isGameEnded,
  updateField,
  setGameStatus,
  setDraw,
  switchPlayer,
}) => {
  const handleClick = (index) => {
    if (field[index] === '' && !isGameEnded) {
      const newField = [...field];
      newField[index] = currentPlayer;
      updateField(newField);

      if (checkWinner(newField, currentPlayer)) {
        setGameStatus(true);
      } else if (!newField.includes('')) {
        setDraw(true);
        setGameStatus(true);
      } else {
        switchPlayer();
      }
    }
  };

  const checkWinner = (newField, player) => {
    const WIN_PATTERNS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

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
    <div className='grid grid-cols-3 grid-rows-3 gap-2 w-72 h-72 mx-auto'>
      {field.map((cell, index) => (
        <Cell key={index} value={cell} onClick={() => handleClick(index)} />
      ))}
    </div>
  );
};

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentPlayer: PropTypes.string.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  updateField: PropTypes.func.isRequired,
  setGameStatus: PropTypes.func.isRequired,
  setDraw: PropTypes.func.isRequired,
  switchPlayer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  field: state.game.field,
  currentPlayer: state.game.currentPlayer,
  isGameEnded: state.game.isGameEnded,
});

const mapDispatchToProps = {
  updateField,
  setGameStatus,
  setDraw,
  switchPlayer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Field);
