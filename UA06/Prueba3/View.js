class View {
    
    constructor() {
        this.listaElemento = document.getElementById('lista');
        this.formElemento = document.getElementById('form');
        this.nombreElemento = document.getElementById('nombre');
        this.descripcionElemento = document.getElementById('descripcion');
    }

    mostrarTareas(tareas) {
        this.listaElemento.innerHTML = '';
        tareas.forEach(tarea => {
            const tareaItem = document.createElement('li');
            tareaItem.textContent = `${tarea.nombre}: ${tarea.descripcion} - ${tarea.fecha.toLocaleDateString()}`;

            const eliminarBtn = document.createElement('button');
            eliminarBtn.textContent = 'Eliminar';
            eliminarBtn.classList.add('eliminar');
            eliminarBtn.dataset.id = tarea.id;

            const actualizarBtn = document.createElement('button');
            actualizarBtn.textContent = 'Actualizar';
            actualizarBtn.classList.add('actualizar');
            actualizarBtn.dataset.id = tarea.id;

            tareaItem.appendChild(eliminarBtn);
            tareaItem.appendChild(actualizarBtn);

            this.listaElemento.appendChild(tareaItem);
        });
    }

    limpiarFormulario() {
        this.formElemento.reset();
    }

    obtenerNombreTarea() {
        return this.nombreElemento.value;
    }

    obtenerDescripcionTarea() {
        return this.descripcionElemento.value;
    }
}