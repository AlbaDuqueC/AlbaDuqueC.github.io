document.addEventListener('DOMContentLoaded', () => {
    const modelo = new TareasModel();
    const vista = new View();

    function inicio() {
        vista.formElemento.addEventListener('submit', (event) => {
            event.preventDefault();
            const nombreTarea = vista.obtenerNombreTarea();
            const descripcionTarea = vista.obtenerDescripcionTarea();
            if (nombreTarea && descripcionTarea) {
                modelo.setTarea(nombreTarea, descripcionTarea);
                vista.mostrarTareas(modelo.getTareas());
                vista.limpiarFormulario();
                alert('Tarea agregada con éxito');
            } else {
                alert('Por favor, ingrese el nombre y la descripción de la tarea');
            }
        });

        vista.listaElemento.addEventListener('click', (event) => {
            if (event.target.classList.contains('eliminar')) {
                const id = parseInt(event.target.dataset.id);
                modelo.eliminarTarea(id);
                vista.mostrarTareas(modelo.getTareas());
                alert('Tarea eliminada con éxito');
            }

            if (event.target.classList.contains('actualizar')) {
                const id = parseInt(event.target.dataset.id);
                const nuevoNombre = prompt('Ingrese el nuevo nombre de la tarea:');
                const nuevaDescripcion = prompt('Ingrese la nueva descripción de la tarea:');
                if (nuevoNombre && nuevaDescripcion) {
                    const tarea = modelo.getTarea(id);
                    modelo.updateTarea(id, nuevoNombre, nuevaDescripcion, tarea.fecha);
                    vista.mostrarTareas(modelo.getTareas());
                    alert('Tarea actualizada con éxito');
                } else {
                    alert('Por favor, ingrese el nuevo nombre y la nueva descripción de la tarea');
                }
            }
        });

        vista.mostrarTareas(modelo.getTareas());
    }

    inicio();
});