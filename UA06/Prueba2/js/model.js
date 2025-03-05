// model.js

let nombre
let apellido
let edad
let ciudad


class TaskModel {

    addNombre(n){
        this.nombre = n
    }
    getNombre(){
        return this.nombre
    }
    addApellido(a){
        this.apellido = a
    }
    getApellido(){
        return this.apellido
    }
    addEdad(e){
        this.edad = e
    }
    getEdad(){
        return this.edad
    }
    addCiudad(c){
        this.ciudad = c
    }
    getCiudad(){
        return this.ciudad
    }
}
