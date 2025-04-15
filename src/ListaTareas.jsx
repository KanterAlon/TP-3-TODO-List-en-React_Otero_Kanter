function ListaTareas(props) {
    const elementos = [];
  
    for (let i = 0; i < props.tareas.length; i++) {
      const tarea = props.tareas[i];
  
      let claseCheckbox = "";
      let simbolo = "";
      let claseTexto = "";
      let fechaTexto = "";
  
      if (tarea.completada === true) {
        claseCheckbox = "checked";
        simbolo = "✔";
        claseTexto = "tachado";
  
        if (tarea.fechaTachado !== null) {
          fechaTexto = "Tachado: " + tarea.fechaTachado.toLocaleString();
        }
      } else {
        fechaTexto = tarea.fechaCreacion.toLocaleString();
      }
  
      const elemento = (
        <div key={i}>
          <span
            className={"checkbox-btn " + claseCheckbox}
            onClick={function () {
              props.alternarEstadoTarea(i);
            }}
          >
            {simbolo}
          </span>
          <label className={claseTexto}>{tarea.texto}</label>
          <br />
          <small>{fechaTexto}</small>
        </div>
      );
  
      elementos.push(elemento);
    }
  
    return <div className="tareas-container">{elementos}</div>;
  }
  
  export default ListaTareas;
  