import React from 'react';
import Game from './Game';

export const App = () => (
  <div>
    <h1
      className='text-center font-bold text-orange-500'
      style={{
        fontSize: 'clamp(2rem, 10vw, 6rem)', // Минимум 2rem, максимум 6rem, между ними 10vw
      }}
    >
      Крестики-Нолики
    </h1>
    <Game />
  </div>
);
