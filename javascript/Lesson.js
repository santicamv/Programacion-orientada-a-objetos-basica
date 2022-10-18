/* Creamos la clase lesson con el fin de modelar las clases (lecciones) que le serán asignados a cada uno de los cursos en el main*/
class Lesson{
    constructor({
        name,
        description,
        duration = 0
    }){
        this.name = name;
        this.description = description;
        this.duration = duration;
    }
}

