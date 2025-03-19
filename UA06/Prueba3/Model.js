class TareasModel {

    constructor() {
        this.lista = [];
        this.contador = 1;
    }

    getTareas() {
        return this.lista;
    }

    getTarea(id) {
        let encontrado = this.buscaId(id);
        if (encontrado >= 0) {
            return this.lista[encontrado];
        }
        return null;
    }

    setTarea(nombre, descripcion) {
        let obj = {
            id: this.contador++,
            nombre: nombre,
            descripcion: descripcion,
            fecha: new Date()
        }
        this.lista.push(obj);
    }

    eliminarTarea(id) {
        const index = this.lista.findIndex(tarea => tarea.id === id);

        if (index !== -1) {
            this.lista.splice(index, 1);
        } else {
            console.log("No se ha encontrado la tarea");
        }
    }

    updateTarea(id, nombre, descripcion, fecha) {
        let pos = this.buscaId(id);
        if (pos >= 0) {
            this.lista[pos].nombre = nombre;
            this.lista[pos].descripcion = descripcion;
            this.lista[pos].fecha = fecha;
            return true;
        }
        return false;
    }

    buscaId(id) {
        return this.lista.findIndex(tarea => tarea.id === id);
    }
}