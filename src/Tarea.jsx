function Tarea({ tarea, onAlternar, index }) {
    let claseCheckbox = "";
    let simbolo = "";
    let claseTexto = "";
    let fechaTexto = tarea.fechaCreacion.toLocaleString();
  
    if (tarea.completada) {
      claseCheckbox = "checked";
      simbolo = "✔";
      claseTexto = "tachado";
  
      if (tarea.fechaTachado !== null) {
        fechaTexto = "Tachado: " + tarea.fechaTachado.toLocaleString();
      }
    }
  
    return (
      <div>
        <span
          className={"checkbox-btn " + claseCheckbox}
          onClick={() => onAlternar(index)}
        >
          {simbolo}
        </span>
        <label className={claseTexto}>{tarea.texto}</label>
        <br />
        <small>{fechaTexto}</small>
      </div>
    );
  }
  
  export default Tarea;
  