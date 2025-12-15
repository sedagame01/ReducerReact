import "./app.css"
import { useOrder } from './hooks/useTodoList';
import { Formulario } from './components/Formulario';
import { Todo } from './components/Todo';

function App() {
  const { todos, newTarea, deleteTarea, change } = useOrder();

  const handleSubmit = (info) => {
    newTarea({
      id: Date.now(),
      titulo: info.titulo,
      descripcion: info.descripcion,
      done: false
    });
  };

  return (
    <>
    <header>Practica Todo List</header>
      <h1>Todo List</h1>
      <Formulario retorno={handleSubmit} />

      <h2>Tareas</h2>
      {todos.map(tarea => (
        <Todo
          key={tarea.id}
          tarea={tarea}
          onDelete={deleteTarea}
          onChangeState={change}
        />
      ))}
    </>
  );
}

export default App;
