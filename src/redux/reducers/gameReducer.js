import {
  UPDATE_FIELD,
  SET_GAME_STATUS,
  SET_DRAW,
  SWITCH_PLAYER,
  RESET_GAME,
} from '../actions/gameActions';

const initialState = {
  field: Array(9).fill(''),
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        field: action.payload,
      };
    case SET_GAME_STATUS:
      return {
        ...state,
        isGameEnded: action.payload,
      };
    case SET_DRAW:
      return {
        ...state,
        isDraw: action.payload,
      };
    case SWITCH_PLAYER:
      return {
        ...state,
        currentPlayer: state.currentPlayer === 'X' ? '0' : 'X',
      };
    case RESET_GAME:
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;
