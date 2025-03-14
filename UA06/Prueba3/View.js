class View {


    constructor() {
        this.listaElemento = document.getElementById('lista');
        this.formElemento = document.getElementById('form');
        this.inputElemento = document.getElementById('input');
    }


    mostrarTareas(tareas) {
        this.listaElemento.innerHTML = '';
        tareas.forEach(tarea => {
            const tareaItem = document.createElement('li');
            tareaItem.textContent = `${tarea.descripcion} - ${tarea.fecha.toLocaleDateString()} - ${tarea.estado ? 'Completada' : 'Pendiente'}`;
            this.listaElemento.appendChild(tareaItem);
        });
    }

    limpiarFormulario() {
        this.formElemento.reset();
    }

    mostrarMensaje(mensaje) {
        const mensajeElemento = document.getElementById('mensaje');
        mensajeElemento.textContent = mensaje;
        setTimeout(() => {
            mensajeElemento.textContent = '';
        }, 3000);
    }

    obtenerDescripcionTarea() {
        return this.inputElemento.value;
    }
}