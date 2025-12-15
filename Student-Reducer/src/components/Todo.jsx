import './Todo.css';

export const Todo = ({ tarea, onDelete, onChangeState }) => {
  return (
    <div className={`todo-item ${tarea.done ? 'done' : ''}`}>
      
      <div className="todo-left">
        <strong>{tarea.titulo}</strong>
        <span> - {tarea.descripcion}</span>
      </div>

      <div className="todo-right">
        <button
          className={`btn-state ${tarea.done ? 'done' : 'pending'}`}
          onClick={() => onChangeState(tarea.id)}
        >
          {tarea.done ? 'Finalizada' : 'Pendiente'}
        </button>

        <button
          className="btn-delete"
          onClick={() => onDelete(tarea.id)}
        >
          Eliminar
        </button>
      </div>

    </div>
  );
};
