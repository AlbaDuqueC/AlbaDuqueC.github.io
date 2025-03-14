class TareasModel {

    constructor() {
        this.lista = [];
        this.contador = 1;
    }

    getTareas() {
        return this.lista;
    }

    getTarea(id) {
        let encontrado = false;
        let resultado = [];
        encontrado = this.buscaId(id)
        if (encontrado >= 0)
            resultado = this.lista[encontrado];
        return resultado;
    }

    setTarea(descripcion) {
        let obj = {
            id: this.contador++,
            descripcion: descripcion,
            fecha: new Date(),
            estado: false,
        }
        this.lista.push(obj);
    }

    eliminarTarea(id) {
        const index = lista.findIndex(tarea => tarea.id === id);

        if (index !== -1) {
            lista.splice(index, 1);
        }else{
            console.log("No se ha encontrado la tarea");
        }
    }

    updateTarea(id, descripcion,fecha, estado) {
        let encontrado = false;
        let pos = this.buscaId(id);
        if (pos >= 0) {
            this.lista[pos].descripcion = descripcion;
            this.lista[pos].fecha = fecha;
            this.lista[pos].estado = estado;
            encontrado = true;
        }
        return encontrado;
    }

    buscaId(id) {
        let i = -1;
        let encontrado = false;
        do {
            i++;
            encontrado = (this.lista[i].id === id);
        } while (!encontrado && i < this.lista.length);
        if (encontrado)
            return i;
        return -1;   // Devuelve la posición encontrada
    }
}