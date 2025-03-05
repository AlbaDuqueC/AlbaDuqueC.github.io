// model.js
const Model = {
    data: {
        items: [],		// Usamos un array como BD
    },
    addItem(item) {
        this.data.items.push(item);
    },
    getItems() {
        return this.data.items;
    },
};

class TaskModel {
    constructor() {
        this.tasks = [];
    }

    // Añadir una tarea
    addTask(task) {
        this.tasks.push(task);
    }

    // Obtener todas las tareas
    getTasks() {
        return this.tasks;
    }

    // Eliminar una tarea por su índice
    deleteTask(index) {
        this.tasks.splice(index, 1);
    }
}
