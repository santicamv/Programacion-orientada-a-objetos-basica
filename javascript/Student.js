/*No trabajaremos más con los objetos literales que ya vimos en los ejemplos de ejemplosObjetos.js, ya que por cada uno se van + de 30 lineas de código y es supremamente ineficiente de manejarlo de esa manera*/ 

/*Vamos a construir los objetos a partir de las clases para crear instancias de los objetos, en este caso son estudiantes*/
class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPath = [] 
    }){
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
}
