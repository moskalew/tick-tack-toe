import React, { useState, useEffect } from 'react';
import { Game } from './Game';
import { store } from './store';

const App = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => setState(store.getState()));
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Крестики-Нолики</h1>
      <Game state={state} />
    </div>
  );
};

export { App };
