export const funcionesReducer = (state = [], action) => {
  switch (action.type) {

    case 'add tarea':
      return [...state, action.payload];

    case 'delete tarea':
      return state.filter(todo => todo.id !== action.payload);

    case 'toggle tarea':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, done: !todo.done }
          : todo
      );

    default:
      return state;
  }
};
