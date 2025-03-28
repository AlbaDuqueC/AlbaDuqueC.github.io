const modelo = new TareasModel();

class Entidad{



    constructor(id,nombre, descripcion,fecha){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.id = id;
        modelo.updateTarea(id, nombre, descripcion, fecha);

    }
    devolverTarea(id){
        return modelo.getTarea(id);
    }


    setTarea(nombre, descripcion){
        this.nombre = nombre;
        this.descripcion = descripcion;
        modelo.setTarea(nombre, descripcion)
    }
    getTareas(){
        return modelo.getTareas();
    }

    getNombre(){
        return this.nombre;
    }
    getDescripcion(){
        return this.descripcion;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    setDescripcion(descripcion){
        this.descripcion = descripcion;
    }
    getFecha(){
        return this.fecha;
    }
    setFecha(fecha){
        this.fecha = fecha;
    }
    getId(){
        return this.id;
    }
    setId(id){
        this.id = id;
    }
    getModelo(){
        return modelo;
    }
    updateTarea(id, nombre, descripcion, fecha){
        modelo.updateTarea(id, nombre, descripcion, fecha);
    }
    eliminar(id){
        modelo.eliminarTarea(id);
    }


}