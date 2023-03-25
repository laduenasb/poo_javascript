class Persona {
	constructor({
			nombre, 
			edad, 
			sexo,
	}) {
			this.nombre = nombre; 
			this.edad = edad
			this.sexo = sexo
	}
}

class Hombre extends Persona {
	constructor({nombre,edad,sexo,email}) {
			super({nombre,edad,sexo});
			this.email=email
	}

	agregarSexo(sexo) {
			if(sexo === "Masculino") {
					this.sexo = sexo
			} else {
					console.warn("Ese no es tu sexo")
			}
	} 
}