import { useState } from "react";
import FormularioTarea from "./FormularioTarea";
import ListaTareas from "./ListaTareas";

function App() {
  const [tareas, setTareas] = useState([]);
  const [textoTarea, setTextoTarea] = useState("");
  const [mensajeTareaRapida, setMensajeTareaRapida] = useState("");

  function cambiarTexto(nuevoTexto) {
    setTextoTarea(nuevoTexto);
  }

  function agregarTarea() {
    if (textoTarea === "") {
      alert("La tarea no puede estar vacía");
      return;
    }

    if (textoTarea.length < 3) {
      alert("La tarea debe tener al menos 3 caracteres");
      return;
    }

    const tareaNueva = {
      texto: textoTarea,
      fechaCreacion: new Date(),
      fechaTachado: null,
      completada: false
    };

    const nuevasTareas = [];

    for (let i = 0; i < tareas.length; i++) {
      nuevasTareas.push(tareas[i]);
    }

    nuevasTareas.push(tareaNueva);

    setTareas(nuevasTareas);
    setTextoTarea("");
  }

  function alternarEstadoTarea(indice) {
    const nuevasTareas = [];

    for (let i = 0; i < tareas.length; i++) {
      const tarea = tareas[i];

      if (i === indice) {
        const tareaNueva = {
          texto: tarea.texto,
          fechaCreacion: tarea.fechaCreacion,
          completada: !tarea.completada,
          fechaTachado: null
        };

        if (tarea.completada === false) {
          tareaNueva.fechaTachado = new Date();
        }

        nuevasTareas.push(tareaNueva);
      } else {
        nuevasTareas.push(tarea);
      }
    }

    setTareas(nuevasTareas);
  }

  function mostrarTareaMasRapida() {
    let tareaMasRapida = null;
    let tiempoMasCorto = null;

    for (let i = 0; i < tareas.length; i++) {
      const tarea = tareas[i];

      if (tarea.completada === true && tarea.fechaTachado !== null) {
        const tiempo = tarea.fechaTachado.getTime() - tarea.fechaCreacion.getTime();

        if (tareaMasRapida === null || tiempo < tiempoMasCorto) {
          tareaMasRapida = tarea;
          tiempoMasCorto = tiempo;
        }
      }
    }

    if (tareaMasRapida !== null) {
      const segundos = String(tiempoMasCorto / 1000);
      const mensaje = 'La tarea más rápida fue "' + tareaMasRapida.texto + '" en ' + segundos + ' segundos.';
      setMensajeTareaRapida(mensaje);
    } else {
      setMensajeTareaRapida("Aún no hay tareas completadas.");
    }
  }

  return (
    <div className="container">
      <h2>Lista de Tareas</h2>

      <FormularioTarea
        texto={textoTarea}
        cambiarTexto={cambiarTexto}
        agregarTarea={agregarTarea}
      />

      <button className="btn-secundario" onClick={mostrarTareaMasRapida}>
        Tarea más rápida
      </button>

      <ListaTareas tareas={tareas} alternarEstadoTarea={alternarEstadoTarea} />

      <p className="tarea-rapida">{mensajeTareaRapida}</p>
    </div>
  );
}

export default App;
