import { useReducer, useEffect } from 'react';
import { funcionesReducer } from '../reducers/tareaReducers';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useOrder = () => {
  const [todos, dispatch] = useReducer(funcionesReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const newTarea = (tarea) => {
    dispatch({ type: 'add tarea', payload: tarea });
  };

  const deleteTarea = (id) => {
    dispatch({ type: 'delete tarea', payload: id });
  };

  const change = (id) => {
    dispatch({ type: 'toggle tarea', payload: id });
  };

  return {
    todos,
    newTarea,
    deleteTarea,
    change
  };
};
