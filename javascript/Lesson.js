/*Creamos la función que permite reproducir la clase*/
function videoPlay(id){
    const url = "www.platzii.es.com/" + id;
    console.log("Se esta reproduciendo desde : " + url)
}

/*Creamos la función que nos permite pausar la clase*/
function videoPause(id){
    const url = "www.platzii.es.com/" + id;
    console.log("Se esta detuvo desde : " + url)
}


/* Creamos la clase lesson con el fin de modelar las clases (lecciones) que le serán asignados a cada uno de los cursos en el main*/
class Lesson{
    constructor({
        name,
        description,
        duration = 0,
        videoID = 0
    }){
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.videoID = videoID;
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

            /*Los getters que se construyen con el fin de realizar encapsulamiento*/
    get description(){
        return this._description;
    }

    /*Los setters se construyen para realizar las modificaciones.*/
    /*IMPORTANTE*/
    /*Para efectuar el cambio del nombre es necesario hacerlo de la siguiente manera :
    - const cursoProgBasica.name = "nombreACambiar";*/
    set description(nuevaDescripcion){
        if(nuevaDescripcion === "Curso Malito de programación básica"){ //Realizamos las validaciones en caso que se requiera, en este caso no queremos que intenten colocar ese nombre como nuevo nombre
            console.error("No es posible modificar el nombre");
        }else{
            this._description = nuevaDescripcion;
        }
    }

    reproducir (){
        videoPlay(this.videoID);
    }

    pausar(){
        videoPause(this.videoID);
    }
}

export const LessonExported = Lesson;

