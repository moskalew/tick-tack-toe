import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Information = ({ currentPlayer, isGameEnded, isDraw }) => (
  <div className='mb-4 text-2xl font-bold'>
    {isDraw ? (
      <span className='text-gray-500'>Ничья</span>
    ) : isGameEnded ? (
      <span className='text-green-500'>Победитель: {currentPlayer}</span>
    ) : (
      <span className='text-blue-500'>Ходит: {currentPlayer}</span>
    )}
  </div>
);

Information.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentPlayer: state.game.currentPlayer,
  isGameEnded: state.game.isGameEnded,
  isDraw: state.game.isDraw,
});

export default connect(mapStateToProps)(Information);
