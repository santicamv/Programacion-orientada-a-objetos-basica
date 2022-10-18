/*Creamos una nueva clase (prototipo) que representa las rutas de aprendizaje que serán utilizadas al crear un estudiante*/
class learningPath{
    constructor({
        name,
        course = []
    }){
        this.name = name;
        this.course = course;
    }
}