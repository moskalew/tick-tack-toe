export const UPDATE_FIELD = 'UPDATE_FIELD';
export const SET_GAME_STATUS = 'SET_GAME_STATUS';
export const SET_DRAW = 'SET_DRAW';
export const SWITCH_PLAYER = 'SWITCH_PLAYER';
export const RESET_GAME = 'RESET_GAME';

export const updateField = (field) => ({
  type: UPDATE_FIELD,
  payload: field,
});

export const setGameStatus = (isGameEnded) => ({
  type: SET_GAME_STATUS,
  payload: isGameEnded,
});

export const setDraw = (isDraw) => ({
  type: SET_DRAW,
  payload: isDraw,
});

export const switchPlayer = () => ({
  type: SWITCH_PLAYER,
});

export const resetGame = () => ({
  type: RESET_GAME,
});
