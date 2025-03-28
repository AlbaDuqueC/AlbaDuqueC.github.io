document.addEventListener('DOMContentLoaded', () => {
    const vista = new View();
    const entidad = new Entidad();


    function inicio() {
        vista.formElemento.addEventListener('submit', (event) => {
            event.preventDefault();
            const nombreTarea = vista.obtenerNombreTarea();
            const descripcionTarea = vista.obtenerDescripcionTarea();

            //Insertar tarea
            if (nombreTarea && descripcionTarea) {
                entidad.setTarea(nombreTarea, descripcionTarea);
                vista.mostrarTareas(entidad.getTareas());
                vista.limpiarFormulario();
                alert('Tarea agregada con éxito');
            } else {
                alert('Por favor, ingrese el nombre y la descripción de la tarea');
            }
        });

        vista.listaElemento.addEventListener('click', (event) => {

            //Eliminar tarea
            if (event.target.classList.contains('eliminar')) {
                const id = parseInt(event.target.dataset.id);
                entidad.eliminar(id);
                vista.mostrarTareas(entidad.getTareas());
                alert('Tarea eliminada con éxito');
            }

            //Actualizar tarea
            if (event.target.classList.contains('actualizar')) {
                const id = parseInt(event.target.dataset.id);
                const nuevoNombre = prompt('Ingrese el nuevo nombre de la tarea:');
                const nuevaDescripcion = prompt('Ingrese la nueva descripción de la tarea:');
                if (nuevoNombre && nuevaDescripcion) {
                    const tarea = entidad.devolverTarea(id);
                    entidad.updateTarea(id, nuevoNombre, nuevaDescripcion, tarea.fecha);
                    vista.mostrarTareas(entidad.getTareas());
                    alert('Tarea actualizada con éxito');
                } else {
                    alert('Por favor, ingrese el nuevo nombre y la nueva descripción de la tarea');
                }
            }
        });

        vista.mostrarTareas(entidad.getTareas());
    }

    inicio();
});