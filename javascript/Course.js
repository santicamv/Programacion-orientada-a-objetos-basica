/* Creamos la clase course con el fin de modelar los cursos que le serán asignados a cada una de las rutas de aprendizaje en el main*/
class Course{
    constructor({
        name,
        lesson = []
    }){
        this._name = name;
        this.lesson = lesson;
    }

    /*Los getters que se construyen con el fin de realizar encapsulamiento*/
    get name(){
        return this._name;
    }

    /*Los setters se construyen para realizar las modificaciones.*/
    /*IMPORTANTE*/
    /*Para efectuar el cambio del nombre es necesario hacerlo de la siguiente manera :
    - const cursoProgBasica.name = "nombreACambiar";*/
    set name(nuevoNombre){
        if(nuevoNombre === "Curso Malito de programación básica"){ //Realizamos las validaciones en caso que se requiera, en este caso no queremos que intenten colocar ese nombre como nuevo nombre
            console.error("No es posible modificar el nombre");
        }else{
            this._name = nuevoNombre;
        }
    }
}
/*Se realiza la exportación hacia el main.js*/
export const CourseExported = Course;