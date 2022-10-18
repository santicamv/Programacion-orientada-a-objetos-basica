/* Creamos la clase course con el fin de modelar los cursos que le serán asignados a cada una de las rutas de aprendizaje en el main*/
class Course{
    constructor({
        name,
        lesson = []
    }){
        this.name = name;
        this.lesson = lesson;
    }
}