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

// Ventajas Poo

class LearningPath {
	constructor({
		name,
		courses
	}){
		this.name=name
		this.courses=courses
	}
}

class Course {
	constructor({
		name,
		classes = []
	}) {
		this._name=name
		this.classes=classes
	}

	get name() {
		return this._name
	}
	
	set name(newName) {
		if (nueveNombrecito === "Curso Malito"){
			console.error("Web... no")
		} else{
			this._name=newName
		}
	}
}

const cursoProbaBasica = new Course({
	name: "Curso Gratis de Programación Básica"
})

const escuelaWeb = LearningPath({
	name: "Escuela de Desarrollo Web",
	courses: [
		"Curso Definitivo de HTML y CSS",
		"Curso Práctico de HTML y CSS"
	]
})


const escuelaData = LearningPath({
	name: "Escuela de Data Science",
	courses: [
		"Curso DataBusiness",
		"Curso Dataviz"
	]
})

class Student3 {
	constructor({
		name,
		email,
		username,
		twitter = undefined,
		instagram = undefined,
		facebook = undefined,
		approvedCourses = [],
		learningPaths = []
	}) {
		this.name=name
		this.email=email
		this.username=username
		this.socialMedia = {
			twitter,
			instagram,
			facebook
		},
		this.approvedCourses = approvedCourses
		this.learningPaths = learningPaths
	}
}

const juan2 = new Student3({
	name: "JuanDC",
	username: "juandc",
	email: "juanito@juanito.com",
	twitter: "fjuandc"
})

const migueln = new Student3({
	name: "Miguelito",
	username: "migulexdf",
	email: "miguel@juanito.com",
	twitter: "amigules"
})