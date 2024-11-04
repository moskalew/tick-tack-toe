const setField = (index, player) => ({
  type: 'SET_FIELD',
  payload: { index, player },
});

const switchPlayer = () => ({ type: 'SWITCH_PLAYER' });

const endGame = () => ({ type: 'END_GAME' });

const setDraw = () => ({ type: 'SET_DRAW' });

const resetGame = () => ({ type: 'RESET_GAME' });

export { setField, switchPlayer, endGame, setDraw, resetGame };
