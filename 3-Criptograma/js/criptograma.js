// INICIACIÓN ------------------------------------------------------------------

var window = window || {},
	document = document || {},
	Juego = Juego || {};

// CONFIGURACIÓN ---------------------------------------------------------------

// Frases precargadas.
Juego.frases = [
	"INTRODUCCION A LA PROGRAMACION",
	"ALGEBRA Y LOGICA COMPUTACIONAL",
	"INTRODUCCION A LOS SISTEMAS DE INFORMACION",
	"ORGANIZACION DE COMPUTADORAS",
	"MATEMATICA DISCRETA",
	"PROGRAMACION I",
	"ARQUITECTURA DE COMPUTADORAS",
	"INGLES I",
	"ANALISIS MATEMATICO I",
	"PROGRAMACION II",
	"SISTEMAS DE INFORMACION I",
	"INGLES II",
	"ANALISIS MATEMATICO II",
	"SISTEMAS OPERATIVOS",
	"PROGRAMACION ORIENTADA A OBJETOS",
	"BASE DE DATOS I",
	"SISTEMAS DE INFORMACION II",
	"TELEINFORMATICA Y REDES",
	"ESTADISTICA Y PROBABILIDAD",
	"PROGRAMACION FUNCIONAL Y LOGICA",
	"SISTEMAS DE INFORMACION III",
	"BASE DE DATOS II",
	"ASPECTOS PROFESIONALES Y SOCIALES",
	"ADMINISTRACION Y GESTION DE REDES",
	"MODELOS SIMULACION Y TEORIA DE LA DECISION",
	"SISTEMAS DISTRIBUIDOS Y PROGRAMACION PARALELA",
	"PROGRAMACION EN AMBIENTE WEB",
	"SEMINARIO DE INTEGRACION PROFESIONAL"
];

// IMPLEMENTACIÓN --------------------------------------------------------------

Juego.contenedor = "";

// Función que crea y devuelve el section principal.
Juego.crearSection = function() {
	var seccion = document.createElement("section");
	seccion.setAttribute("id", "criptograma-tmp");
	Juego.contenedor.appendChild(seccion);
	return seccion;
}

// Función que limpia el contenedor.
Juego.limpiar = function() {
	var elemento = document.getElementById("criptograma-tmp");
	Juego.contenedor.removeChild(elemento);
}

// Función que mezcla el array de claves.
Juego.mezclar = function() {
	var i = Juego.claves.length;
	while (i > 1) {
		var x = parseInt(Math.random() * i);
		i--;
		if (x != i) {
			var aux = Juego.claves[x];
			Juego.claves[x] = Juego.claves[i];
			Juego.claves[i] = aux;
		}
	}
}

// Función que crea un div para un caracter de la frase, dado un código ASCII.
Juego.crearLetra = function(caracter) {
	var result = document.createElement("div");
	result.classList.add("criptograma-letra");
	var elemento = document.createElement("span");
	if (caracter >= 65 && caracter <= 90) {
		elemento.classList.add("criptograma-letra-" + Juego.claves[caracter - 65]);
	} else {
		elemento.innerHTML = String.fromCharCode(caracter);
		elemento.classList.add("criptograma-letra-fija");
	}
	result.appendChild(elemento);
	elemento = document.createElement("p");
	if (caracter >= 65 && caracter <= 90) {
		elemento.innerHTML = Juego.claves[caracter - 65];
	}
	result.appendChild(elemento);
	return result;
}

// Función que inicia el juego y muestra las frases posibles para jugar.
Juego.iniciar = function(contenedor) {
	window.addEventListener("DOMContentLoaded", function() {
		Juego.contenedor = document.getElementById(contenedor);
		Juego.elegirFrase();
	});
}

// Función que muestra las frases posibles para jugar.
Juego.elegirFrase = function() {
	Juego.frase = "";
	Juego.elementos = "";
	Juego.claves = [];
	var seccion = Juego.crearSection();
	var elemento = document.createElement("p");
	elemento.innerHTML = "Elija la frase para jugar:";
	seccion.appendChild(elemento);
	elemento = document.createElement("button");
	elemento.innerHTML = "FRASE ALEATORIA";
	elemento.addEventListener("click", function() {
		Juego.frase = Juego.frases[parseInt(Math.random() * Juego.frases.length)];
		Juego.elegirElemento();
	});
	seccion.appendChild(elemento);
	Juego.frases.forEach(function(value) {
		elemento = document.createElement("button");
		elemento.innerHTML = value;
		elemento.addEventListener("click", function() {
			Juego.frase = this.innerHTML;
			Juego.elegirElemento();
		});
		seccion.appendChild(elemento);
	});
}

// Función que muestra los elementos posibles para jugar.
Juego.elegirElemento = function() {
	Juego.limpiar();
	var seccion = Juego.crearSection();
	var elemento = document.createElement("p");
	elemento.innerHTML = "Elija el grupo de elementos para jugar:";
	seccion.appendChild(elemento);
	var elementos = ["NUMEROS", "LETRAS", "DIBUJOS"];
	elementos.forEach(function(value) {
		elemento = document.createElement("button");
		elemento.innerHTML = value;
		// Sólo agrego el evento a los elementos implementados.
		// A los elementos no implementados les deshabilito el botón.
		if (value != "DIBUJOS") {
			elemento.addEventListener("click", function() {
				Juego.elementos = this.innerHTML;
				Juego.jugar();
			});
		} else {
			elemento.disabled = true;
		}
		seccion.appendChild(elemento);
	});
}

// Función que despacha el juego según el grupo de elementos elegido.
Juego.jugar = function() {
	Juego.limpiar();
	switch (Juego.elementos) {
		case "NUMEROS": Juego.jugarNumeros();
			break;
		case "LETRAS": Juego.jugarLetras();
			break;
		case "DIBUJOS": Juego.jugarDibujos();
	}
}

// Función que inicia el juego con números.
Juego.jugarNumeros = function() {
	var seccion = Juego.crearSection();
	for (var i = 1; i <= 26; i++) {
		Juego.claves.push(i);
	}
	Juego.mezclar();
	var tabla = document.createElement("table");
	tabla.setAttribute("id", "criptograma-tabla");
	seccion.appendChild(tabla);
	var fila = document.createElement("tr");
	tabla.appendChild(fila);
	for (var i = 65; i <= 90; i++) {
		var columna = document.createElement("td");
		columna.innerHTML = String.fromCharCode(i);
		fila.appendChild(columna);
	}
	fila = document.createElement("tr");
	tabla.appendChild(fila);
	for (var i = 65; i <= 90; i++) {
		var columna = document.createElement("td");
		fila.appendChild(columna);
		var elemento = document.createElement("input");
		elemento.setAttribute("type", "text");
		elemento.setAttribute("name", String.fromCharCode(i));
		elemento.setAttribute("maxlength", "2");
		elemento.addEventListener("change", function() {
			var valor = this.value;
			var letra = this.name;
			var letras = document.querySelectorAll("#criptograma #criptograma-frase .criptograma-letra span[name=" + letra + "]");
			letras.forEach(function(value) {
				value.removeAttribute("name");
				value.innerHTML = "";
			});
			letras = document.querySelectorAll("#criptograma #criptograma-frase .criptograma-letra .criptograma-letra-" + valor);
			letras.forEach(function(value) {
				value.setAttribute("name", letra);
				value.innerHTML = letra;
			});
		});
		columna.appendChild(elemento);
	}
	var frase = document.createElement("div");
	frase.setAttribute("id", "criptograma-frase");
	seccion.appendChild(frase);
	for (var i = 0; i < Juego.frase.length; i++) {
		var elemento = Juego.crearLetra(Juego.frase.charCodeAt(i));
		frase.appendChild(elemento);
	}
	var elemento = document.createElement("button");
	elemento.innerHTML = "Verificar";
	elemento.addEventListener("click", function() {
		var gano = true;
		var letras = document.querySelectorAll("#criptograma #criptograma-frase .criptograma-letra span");
		if (letras.length != Juego.frase.length) {
			alert("Ha ocurrido un error.");
			Juego.limpiar();
			Juego.elegirFrase();
		} else {
			for (var i = 0; i < letras.length; i++) {
				if (Juego.frase.substring(i, i + 1) != letras[i].innerHTML) {
					gano = false;
					break;
				}
			}
			if (gano) {
				alert("Has ganado!!");
				Juego.limpiar();
				Juego.elegirFrase();
			} else {
				alert("La frase es incorrecta.");
			}
		}
	});
	seccion.appendChild(elemento);
}

// Función que inicia el juego con letras.
Juego.jugarLetras = function() {
	var seccion = Juego.crearSection();
	for (var i = 65; i <= 90; i++) {
		Juego.claves.push(String.fromCharCode(i));
	}
	Juego.mezclar();
	var tabla = document.createElement("table");
	tabla.setAttribute("id", "criptograma-tabla");
	seccion.appendChild(tabla);
	var fila = document.createElement("tr");
	tabla.appendChild(fila);
	for (var i = 65; i <= 90; i++) {
		var columna = document.createElement("td");
		columna.innerHTML = String.fromCharCode(i);
		fila.appendChild(columna);
	}
	fila = document.createElement("tr");
	tabla.appendChild(fila);
	for (var i = 65; i <= 90; i++) {
		var columna = document.createElement("td");
		fila.appendChild(columna);
		var elemento = document.createElement("input");
		elemento.setAttribute("type", "text");
		elemento.setAttribute("name", String.fromCharCode(i));
		elemento.setAttribute("maxlength", "1");
		elemento.addEventListener("change", function() {
			this.value = this.value.toUpperCase();
			var valor = this.value;
			var letra = this.name;
			var letras = document.querySelectorAll("#criptograma #criptograma-frase .criptograma-letra span[name=" + letra + "]");
			letras.forEach(function(value) {
				value.removeAttribute("name");
				value.innerHTML = "";
			});
			letras = document.querySelectorAll("#criptograma #criptograma-frase .criptograma-letra .criptograma-letra-" + valor);
			letras.forEach(function(value) {
				value.setAttribute("name", letra);
				value.innerHTML = letra;
			});
		});
		columna.appendChild(elemento);
	}
	var frase = document.createElement("div");
	frase.setAttribute("id", "criptograma-frase");
	seccion.appendChild(frase);
	for (var i = 0; i < Juego.frase.length; i++) {
		var elemento = Juego.crearLetra(Juego.frase.charCodeAt(i));
		frase.appendChild(elemento);
	}
	var elemento = document.createElement("button");
	elemento.innerHTML = "Verificar";
	elemento.addEventListener("click", function() {
		var gano = true;
		var letras = document.querySelectorAll("#criptograma #criptograma-frase .criptograma-letra span");
		if (letras.length != Juego.frase.length) {
			alert("Ha ocurrido un error.");
			Juego.limpiar();
			Juego.elegirFrase();
		} else {
			for (var i = 0; i < letras.length; i++) {
				if (Juego.frase.substring(i, i + 1) != letras[i].innerHTML) {
					gano = false;
					break;
				}
			}
			if (gano) {
				alert("Has ganado!!");
				Juego.limpiar();
				Juego.elegirFrase();
			} else {
				alert("La frase es incorrecta.");
			}
		}
	});
	seccion.appendChild(elemento);
}

// Función que inicia el juego con dibujos.
Juego.jugarDibujos = function() {
	// IMPLEMENTAR.
}
