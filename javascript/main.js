
/*Importamos las otras clases a esta que va a ser la principal para unir todo desde el archivo import-export*/
import {StudentExported} from "./Student.js";
import {learningPathExported} from "./learningPath.js";
import {CourseExported} from "./Course.js";
import {LessonExported} from "./Lesson.js";
import { FreeStudentExported } from "./Student.js";
import { BasicStudentExported } from "./Student.js";
import { ExpertStudentExported } from "./Student.js";



/*LECCIONES O CLASES*/
const leccion1 = new LessonExported({
    name : "Clase de abstracción en JavaScript",
    description : "Clase en la que se repasará el concepto de abstracción en JavaScript",
    duration : 9
});

/*Métodos creados en lesson.mjs que son llamados mediante la lección uno*/
leccion1.reproducir();
leccion1. pausar();





const leccion2 = new LessonExported({
    name : "Clase de tipos de datos en JavaScript",
    description : "Clase en la que se repasarán los tipos de datos en JavaScript",
    duration : 12
});

const leccion3 = new LessonExported({
    name : "Clase de diseño de personajes",
    description : "Clase en la que se abordará el diseño de los personajes para videojuegos",
    duration : 20
});

const leccion4 = new LessonExported({
    name : "Clase de DataScience básica",
    description : "Clase en la que se abordarán los conceptos básicos de la ciencia de datos",
    duration : 5
});

const leccion5 = new LessonExported({
    name : "Clase de HTML básico",
    description : "Clase en la que se abordarán los conceptos básicos de HTML",
    duration : 8
});

const leccion6 = new LessonExported({
    name : "Clase de CSS básico",
    description : "Clase en la que se abordarán los conceptos básicos de CSS",
    duration : 14
});

const leccion7 = new LessonExported({
    name : "Clase de CSS y HTML avanzado",
    description : "Clase en la que se abordarán los conceptos avanzados de CSS y HTML",
    duration : 14
});

const leccion8 = new LessonExported({
    name : "Clase de Unreal Engine",
    description : "Clase en la que se abordará a Unreal Engine como motor del juego",
    duration : 24
});






/*CURSOS*/

/*Creamos los cursos que serán utilizados en las rutas de aprendizaje*/
const cursoProgBasica = new CourseExported({
    name : "Curso de Programación Básica",
    lesson : [
        leccion1,
        leccion2
    ],
    isFree : true
});
console.log(cursoProgBasica);

const cursoDefHTMLYCSS = new CourseExported({
    name : "Curso definitivo de HTML y CSS",
    lesson : [
        leccion5,
        leccion6
    ],
    language : "english"
});

const cursoDefHTMLYCSSAv = new CourseExported({
    name : "Curso práctico de HTML y CSS",
    lesson : [
        leccion7
    ]
});

const cursoDeDataScience = new CourseExported({
    name : "Curso de DataBusiness",
    lesson : [
        leccion4
    ]
});

const cursoDeUnrealEngine = new CourseExported({
    name : "Curso de Unreal Engine",
    lesson : [
        leccion8,
        leccion3
    ]
});



/*RUTAS DE APRENDIZAJE*/

/*Creamos la primera escuela que será la escuela de desarrollo web*/
const escuelaWeb = new learningPathExported({
    name : "Escuela de desarrollo Web",
    course : [
        cursoProgBasica,
        cursoDefHTMLYCSS,
        cursoDefHTMLYCSSAv
        
    ]
});

/*Creamos la segunda escuela que será la escuela de data science*/
const escuelaDScience = new learningPathExported({
    name : "Escuela de data science",
    course : [
        cursoProgBasica,
        cursoDeDataScience
    ]
});

/*Creamos la tercera escuela que será la escuela de videojuegos*/
const escuelaVideojuegos = new learningPathExported({
    name : "Escuela de videojuegos",
    course : [
        cursoProgBasica,
        cursoDeUnrealEngine
    ]
});



/*ESTUDIANTE*/

/*Creamos nuestro primer objeto de tipo Estudiante, en este caso es un estudiante nuevo, con los atributos nombre, nombreDeUsuario e email que son obligatorios y los demas son opcionales, en este caso se coloca facebook*/
const santiago = new FreeStudentExported({
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
const miguelito = new ExpertStudentExported({
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


miguelito.approveCourse(cursoDefHTMLYCSS);
santiago.approveCourse(cursoDefHTMLYCSS)
console.log(santiago);
console.log(miguelito);



