/*Se verán los cuatro pilares escenciales de la programación orientada a objetos y su implementación en JavaScript*/

/*ABSTRACCIÓN*/
/*Consiste en abstraer los datos de un objeto para crear su molde y luego implementar los prototipos para crear nuevos objetos.*/

/*ENCAPSULAMIENTO*/
/*El segundo pilar de la POO hace referencia al encapsulamiento, consiste en limitar el acceso de ciertas propiedades en nuestros atributos y objetos*/
/*Esconder métodos y atributos (EN JavaScript no se pueden esconder, no existe el private, a o ser que se modifique el prototipo Object)*/ 
/*No permitir la alteración de los métodos y los atributos*/

/*IMPORTANTE*/
/*Hay 4 formas de hacer encapsulamiento:
- La primera es mediante los Getters y los Setters.
- La segunda es mediante los Namespaces.
- La tercera es mediante Object.defineProperties.
- La cuarta es mediante Módulos de ES6.*/


/*HERENCIA*/
/*La herencia nos permite crear un superprototipo como un objeto gigante y de el desprender todo lo comun con lo que cuenta nuestro proyecto en específico, por ejemplo, el el caso del mini platzi, podemos crear una clase gigante que se llama Student y dento de el modelaremos todo lo que tienen en comun todos los tipos de estudiante, por ejemplo el nombre, el email y todos los métodos comunes entre todos los tipos de estudiantes, luego creamos clases por cada uno de los tipos de estudiantes, free student, basic student y expert student. y cada uno de estos heredarán todo lo que se colocó en la superclase Student implementando en extends y adicionalmente se le podrá agregar a cada clase los atributos o métodos únicos para esa clase en particular.*/

/*POLIMORFISMO*/
/*Le permite a los métodos o atributos heredados de una super clase cambiar o mutar*/

/*Tipos de polimorfismo:
- Sobrecarga
- Paramétrico
- Inclusión*/