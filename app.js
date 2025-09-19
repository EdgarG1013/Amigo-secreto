// Lista que almacena los nombres añadidos
let amigos = [];


// Función para añadir un nombre a la lista
function agregarAmigo() {

    let ingresarAmigo = document.getElementById('amigo');
	let nombre = ingresarAmigo.value.trim();

	// Verficacion de que el campo no este vacío
	if (!nombre) {
		alert('Por favor ingresa un nombre válido.');
		ingresarAmigo.focus();
		return;
	}

	// Verificacion de que el nombre no este repetido
	if (amigos.includes(nombre)) {
		alert('Ese nombre ya fue añadido.');
		ingresarAmigo.value = '';
		ingresarAmigo.focus();
		return;
	}

	amigos.push(nombre);
	ingresarAmigo.value = '';
	ingresarAmigo.focus();


    console.log(amigos);
}

// Funcion para actualizar la lista en el HTML
function actualizarLista() {


}