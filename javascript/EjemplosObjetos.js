/*Creamos un objeto literal que en este caso se llama natalia*/
const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados1: [
        "Curso definitivo HTML y CSS",
        "Curso práctico HTML y CSS"
    ],
    /*Método declarado al interior del mismo objeto*/
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados1.push(nuevoCurso);
    }
};

/*Imprimimos el contenido de natalia*/
console.log(natalia);

/*Haremos que Natalia apruebe otro curso, le cambiamos el nombre y la edad*/
natalia.cursosAprobados1.push("Curso de Responsive Design");
natalia.name = "Nath";
natalia.age += 1;

console.log(natalia);


/* Creamos nuestro primer prototipo llamado Student*/
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = [cursosAprobados];
}

/*Creamos un método para agregar un nuevo curso por fuera de la definición del prototipo Student*/
Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

/*Creamos una instancia de Student que en este caso es juanita*/
const juanita = new Student("Juanita", 15, "Curso de Git y Github");

/*Le agregamos un nuevo cuerso a la lista de cursos aprobados de juantita gracias al método aprobarCurso creado anteriormente*/
juanita.aprobarCurso("java");

/*Implementando la sintaxis de clases de javascript en los prototipos*/
class Student2 {
    constructor(name, age, cursosAprobados) {
        this.name = name;
        this.age = age;
        this.cursosAprobados = [cursosAprobados];
    }
    aprobarCurso3(nuevoCurso3) {
        this.cursosAprobados.push(nuevoCurso3);
    }
}

/*Creamos una instancia de Student que en este caso es juanita*/
const jorge = new Student("Jorge", 28, "Curso de Angular");

/*Uso nuevo implementando la sintaxis de clases, es muy importante debido a que no importa el orden en el que se coloquen los parámetros, y se declare el this.name (por ejemplo...). Así mismo no es obligatorio utilizarlos a todos, puedes utilizar unos cuantos y asignarles valores por defecto en caso que no sea introducido un valor, es muy útil en caso que tengamos muchos atributos que agregarle al objeto*/
class Student3 {
    constructor({
        name = "Undefined",
        age = 0,
        cursosAprobados3 = [],
        puntos = 0,
        suscripcion = "Undefined",
        foto = "Undefined"
    }) {
        this.name = name;
        this.age = age;
        this.cursosAprobados3 = [cursosAprobados3];
        this.puntos = puntos;
        this.suscripcion = suscripcion;
        this.foto = foto;
    }
}

/*Implementando lo anterior podemos crear un estudiante de la siguiente manera:*/
/*Notemos que no importa el orden en el que se estan enviando los atributos, el igualmente los va a capturar adecuadamente. Así mismo, notemos que no se envía la foto, en este caso no importa, ya que si observamos arriba se le colocaron valores por defecto al constructor para que reciba Undefined en caso que no se envíe nada en ese atributo*/
const santiago = new Student3({
    age : 26,
    name : "Santiago",
    puntos : 6981,
    cursosAprobados3 : ["Curso de .NET"],
    suscripcion : "Platzi Expert",
})

/*Vamos a hacer un primer ejemplo implementando los siguientes objetos literales:*/
/*Para este ejemplo, juan1 tiene un nombre, un usuario, unos puntos, tenemos un objeto dentro del objeto literal que son las redes sociales, los cursos que ya aprobó como un arreglo, las escuelas en las que forma parte como un arreglo con objetos y los cursos que ve en esas escuelas*/
const juan1 = {
    name: "Juan",
    username: "juan123",
    points: 100,
    socialMedia: {
        twitter: "juan123",
        instagram: "juan123",
        facebook: undefined
    },
    approvedCourses: [
        "curso introductorio de HTML y CSS",
        "curso practico de HTML y CSS"
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo web",
            courses: [
                "curso introductorio de HTML y CSS",
                "curso practico de HTML y CSS",
                "curso de Responsive Design"
            ]
        },
        {
            name: "Escuela de Desarrollo videojuegos",
            courses: [
                "curso introductorio a la produccion de Videojuegos",
                "curso de Unreal Engine",
                "curso de Unity en 3D"
            ]
        },
    ]
};
/*Segundo objeto literal creado igual que el anterior, representan estudiantes de Platzi*/
const miguelito1 = {
    name: "Miguelito",
    username: "miguelitofeliz",
    points: 2587,
    socialMedia: {
        twitter: "miguelitofeliz",
        instagram: "miguelito_feliz",
        facebook: undefined
    },
    approvedCourses: [
        "curso DataBusiness",
        "curso DataViz"
    ],
    learningPaths: [
        {
            name: "Escuela de Desarrollo web",
            courses: [
                "curso introductorio de HTML y CSS",
                "curso practico de HTML y CSS",
                "curso de Responsive Design"
            ]
        },
        {
            name: "Escuela de Data Science",
            courses: [
                "curso DataBusiness",
                "curso DataViz",
                "curso de Tableau"
            ]
        },
    ]
};