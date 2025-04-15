function FormularioTarea(props) {
    return (
      <div className="input-container">
        <input
          type="text"
          value={props.texto}
          onChange={function (e) {
            props.cambiarTexto(e.currentTarget.value);
          }}
        />
        <button onClick={props.agregarTarea}>Agregar</button>
      </div>
    );
  }
  
  export default FormularioTarea;
  