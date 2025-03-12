class Model{

    lista = []

    constructor( id,  descripcion,  fecha,  estado){
        this.id = id
        this.descripcion = descripcion 
        this.fecha = fecha
        this.estado = estado
    }



    getId(){
        return this.id
    }
    setId(id){
        if(this.id != null && this.id != ""){
            this.id = id
        }
    }

    getDescripcion(){
        return this.descripcion
    }
    setDescripcion(descripcion){
        if(this.descripcion != null && this.descripcion != ""){
        this.descripcion = descripcion
        }
    }

    getFecha(){
        return this.fecha
    }
    setFecha(fecha){
        if(this.fecha != null && this.fecha != ""){
        this.fecha = fecha
        }
    }
    getEstado(){
        return this.estado
    }
    setEstado(estado){
        if(this.estado != null && this.estado != ""){
        this.estado = estado
        }
    }

    validar(){
        let validar = true
        if(this.id == null || this.id == ""){
            validar= false
        }
        if(this.descripcion == null || this.descripcion == ""){
            validar= false
        }
        if(this.fecha == null || this.fecha == ""){
            validar= false
        }
        if(this.estado == null || this.estado == ""){
            validar= false
        }
        return validar
    }

    guardar(){
        if(this.validar()){
            console.log("Se ha guardado correctamente")
            //Insertar en la base de datos

        }else{
            console.log("No se ha guardado correctamente")
        }
    }

    static ObtenerPorId(id){
        //Buscar en la base de datos
        
        return new Model(this.id, this.descripcion, this.fecha, this.estado)
    }



}