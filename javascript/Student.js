/*No trabajaremos más con los objetos literales que ya vimos en los ejemplos de ejemplosObjetos.js, ya que por cada uno se van + de 30 lineas de código y es supremamente ineficiente de manejarlo de esa manera*/

/*Vamos a construir los objetos a partir de las clases para crear instancias de los objetos, en este caso son estudiantes*/
class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPath = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter, // Esto es como decir this.twitter = twitter;
            instagram, // Esto es como decir this.instagram = instagram;
            facebook // Esto es como decir this.facebook = facebook;
        };
        this.approvedCourses = approvedCourses;
        this.learningPath = learningPath;
    }



    /*Los getters que se construyen con el fin de realizar encapsulamiento*/
    get name() {
        return this._name;
    }

    /*Los setters se construyen para realizar las modificaciones.*/
    /*IMPORTANTE*/
    /*Para efectuar el cambio del nombre es necesario hacerlo de la siguiente manera :
    - const cursoProgBasica.name = "nombreACambiar";*/
    set name(nuevoNombre) {
        if (nuevoNombre === "Curso Malito de programación básica") { //Realizamos las validaciones en caso que se requiera, en este caso no queremos que intenten colocar ese nombre como nuevo nombre
            console.error("No es posible modificar el nombre");
        } else {
            this._name = nuevoNombre;
        }
    }


    get email() {
        return this._email;
    }

    set email(nuevoEmail) {
        if (nuevoEmail === "Curso Malito de programación básica") {
            console.error("No es posible modificar el nombre");
        } else {
            this._email = nuevoEmail;
        }
    }



    get username() {
        return this._username;
    }

    set username(nuevoUsername) {
        if (nuevoUsername === "Curso Malito de programación básica") { //Realizamos las validaciones en caso que se requiera, en este caso no queremos que intenten colocar ese nombre como nuevo nombre
            console.error("No es posible modificar el nombre");
        } else {
            this._username = nuevoUsername;
        }
    }
}

export const StudentExported = Student;
