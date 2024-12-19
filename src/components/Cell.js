import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ value, onClick }) => (
  <button
    className='w-24 h-24 text-3xl font-bold bg-gray-200 border border-gray-400 hover:bg-gray-300'
    onClick={onClick}
  >
    {value}
  </button>
);

Cell.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Cell;
