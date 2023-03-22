const natalia={
	name: "Natalia",
	age: 20,
	cursosAprobados: [
		"Curso Definitivo de HTML y CSS",
		"Curso Práctico de HTML y CSS"
	],
	aprobarCurso(nuevoCurso) {
		this.cursosAprobados.push(nuevoCurso);
	}
};

// Hacer que Natalia apruebe otro curso

// natalia.cursosAprobados.push("Curso de Responsive Design");

function Student(name, age, cursosAprobados) {
	this.name = name;
	this.age = age;
	this.cursosAprobados = cursosAprobados;
	// this.aprobarCurso = function (nuevoCurso) {
	// 	this.cursosAprobados.push(nuevoCurso);
	// }
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
	this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student(
	"Juanita Alejandra",
	15,
	[
		"Curso de Introducción a la Producción de Videojuegos",
		"Curso de Creación de Contenido"
	]
);


// Prototipos con la sintaxis de clases

class Student2 {
	constructor({
		name,
		age,
		cursosAprobados = [],
		email
	}) {
		this.name = name;
		this.age = age;
		this.cursosAprobados = cursosAprobados;
		this.email = email;
	}
	aprobarCurso(nuevoCurso) {
		this.cursosAprobados.push(nuevoCurso);
	}
}

const miguel = new Student2(
	{
		email: "miguel@test.com",
		name: "Miguel",
		age: 28,
		cursosAprobados: [
			"Curso de Análisis de Negocios para Ciencia de datos",
			"Curso de Principios de visualizacion de Datos para BI"
		]
	}
);