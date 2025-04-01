class Entidad{

    contructor(id, nombre, descripcion){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;

    }

    getId(){
        return this.id;
    }
    getNombre(){
        return this.nombre;
    }
    getDescripcion(){
        return this.descripcion;
    }
    setId(id){
        this.id = id;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }
    setDescripcion(descripcion){
        this.descripcion = descripcion;
    }

}