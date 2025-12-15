import { useState } from 'react';
import './Formulario.css';

//solo encontre como pasar esto al padre con una funcion 
export const Formulario = ({ retorno }) => {
  //estados para los input del formulario
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  //evento 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    
    retorno({ titulo, descripcion });//dartos al formu
    
    //reseteamos los valores
    setTitulo('');
    setDescripcion('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <textarea
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <button type="submit">Añadir tarea</button>
    </form>
  );
};
/* 
preguntarle si pasar directamente el evento en onchage mola o no , yo creoq si si y luego vemos de pasar las comprovaciones  */