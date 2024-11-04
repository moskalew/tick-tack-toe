const initialState = {
  field: Array(9).fill(''),
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
  winner: null, // Добавляем поле для победителя
};

const WIN_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // горизонтали
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // вертикали
  [0, 4, 8],
  [2, 4, 6], // диагонали
];

const checkWinner = (field, player) => {
  return WIN_PATTERNS.some((pattern) => {
    const [a, b, c] = pattern;
    return (
      field[a] === player && field[a] === field[b] && field[a] === field[c]
    );
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FIELD': {
      const newField = state.field.slice();
      newField[action.payload.index] = action.payload.player;

      // Проверяем, есть ли победитель после обновления поля
      if (checkWinner(newField, action.payload.player)) {
        return {
          ...state,
          field: newField,
          isGameEnded: true,
          winner: action.payload.player, // Устанавливаем победителя
        };
      }

      // Проверка на ничью
      const isDraw = !newField.includes('');
      if (isDraw) {
        return { ...state, field: newField, isDraw: true, isGameEnded: true };
      }

      return { ...state, field: newField };
    }

    case 'SWITCH_PLAYER':
      return {
        ...state,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      };

    case 'RESET_GAME':
      return initialState;

    default:
      return state;
  }
};

export { reducer };
