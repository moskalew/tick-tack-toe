import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ value, onClick }) => (
  <button
    className='flex items-center justify-center w-full h-full bg-gray-200 border border-gray-400 text-2xl font-bold hover:bg-gray-300'
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
