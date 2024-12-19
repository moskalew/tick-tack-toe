import React from 'react';
import { connect } from 'react-redux';
import Field from './Field';
import Information from './Information';
import { resetGame } from '../redux/actions/gameActions';

const Game = ({ resetGame }) => (
  <div className='text-center p-4'>
    <Information />
    <Field />
    <button
      className='mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600'
      onClick={resetGame}
    >
      Начать заново
    </button>
  </div>
);

const mapDispatchToProps = { resetGame };

export default connect(null, mapDispatchToProps)(Game);
