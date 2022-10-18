
/*Importamos las otras clases a esta que va a ser la principal para unir todo desde el archivo import-export*/
import { Student, learningPath, Course, Lesson } from "./import-export";


/*LECCIONES O CLASES*/
const leccion1 = new Lesson({
    name : "Clase de abstracción en JavaScript",
    description : "Clase en la que se repasará el concepto de abstracción en JavaScript",
    duration : 9
});

const leccion2 = new Lesson({
    name : "Clase de tipos de datos en JavaScript",
    description : "Clase en la que se repasarán los tipos de datos en JavaScript",
    duration : 12
});

const leccion3 = new Lesson({
    name : "Clase de diseño de personajes",
    description : "Clase en la que se abordará el diseño de los personajes para videojuegos",
    duration : 20
});

const leccion4 = new Lesson({
    name : "Clase de DataScience básica",
    description : "Clase en la que se abordarán los conceptos básicos de la ciencia de datos",
    duration : 5
});

const leccion5 = new Lesson({
    name : "Clase de HTML básico",
    description : "Clase en la que se abordarán los conceptos básicos de HTML",
    duration : 8
});

const leccion6 = new Lesson({
    name : "Clase de CSS básico",
    description : "Clase en la que se abordarán los conceptos básicos de CSS",
    duration : 14
});

const leccion7 = new Lesson({
    name : "Clase de CSS y HTML avanzado",
    description : "Clase en la que se abordarán los conceptos avanzados de CSS y HTML",
    duration : 14
});

const leccion8 = new Lesson({
    name : "Clase de Unreal Engine",
    description : "Clase en la que se abordará a Unreal Engine como motor del juego",
    duration : 24
});






/*CURSOS*/

/*Creamos los cursos que serán utilizados en las rutas de aprendizaje*/
const cursoProgBasica = new Course({
    name : "Curso de Programación Básica",
    lesson : [
        leccion1,
        leccion2
    ]
});

const cursoDefHTMLYCSS = new Course({
    name : "Curso definitivo de HTML y CSS",
    lesson : [
        leccion5,
        leccion6
    ]
});

const cursoDefHTMLYCSSAv = new Course({
    name : "Curso práctico de HTML y CSS",
    lesson : [
        leccion7
    ]
});

const cursoDeDataScience = new Course({
    name : "Curso de DataBusiness",
    lesson : [
        leccion4
    ]
});

const cursoDeUnrealEngine = new Course({
    name : "Curso de Unreal Engine",
    lesson : [
        leccion8,
        leccion3
    ]
});



/*RUTAS DE APRENDIZAJE*/

/*Creamos la primera escuela que será la escuela de desarrollo web*/
const escuelaWeb = new learningPath({
    name : "Escuela de desarrollo Web",
    course : [
        cursoProgBasica,
        cursoDefHTMLYCSS,
        cursoDefHTMLYCSSAv
        
    ]
});

/*Creamos la segunda escuela que será la escuela de data science*/
const escuelaDScience = new learningPath({
    name : "Escuela de data science",
    course : [
        cursoProgBasica,
        cursoDeDataScience
    ]
});

/*Creamos la tercera escuela que será la escuela de videojuegos*/
const escuelaVideojuegos = new learningPath({
    name : "Escuela de videojuegos",
    course : [
        cursoProgBasica,
        cursoDeUnrealEngine
    ]
});



/*ESTUDIANTE*/

/*Creamos nuestro primer objeto de tipo Estudiante, en este caso es un estudiante nuevo, con los atributos nombre, nombreDeUsuario e email que son obligatorios y los demas son opcionales, en este caso se coloca facebook*/
const santiago = new Student({
    name : "Santiago",
    username : "Trackerfy",
    email : "santiago@example.com",
    facebook : "scamvalb",
    learningPath : [
        escuelaWeb,
        escuelaDScience
    ]
});
/*Segundo Estudiante creado*/
const miguelito = new Student({
    name : "Miguelito",
    username : "miguelitofeliz",
    email : "miguelito@example.com",
    facebook : "miguelitof",
    twitter : "miguelito_feliz",
    learningPath : [
       escuelaWeb,
       escuelaVideojuegos 
    ]
});




