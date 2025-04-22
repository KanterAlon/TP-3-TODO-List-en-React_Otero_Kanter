import Tarea from "./Tarea";

function ListaTareas({ tareas, alternarEstadoTarea }) {
  return (
    <div className="tareas-container">
      {tareas.map((tarea, index) => (
        <Tarea
          key={index}
          tarea={tarea}
          index={index}
          onAlternar={alternarEstadoTarea}
        />
      ))}
    </div>
  );
}

export default ListaTareas;
