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
    actualizarLista();
}

// Funcion para actualizar la lista en el HTML
function actualizarLista() {

    let listaAmigos = document.getElementById('listaAmigos');
	listaAmigos.innerHTML = '';

	if (amigos.length === 0) {

		let li = document.createElement('li');
		li.textContent = 'Ingrese los nuevos nombres.';
		listaAmigos.appendChild(li);
		return;
	}

	amigos.forEach((nombre, index) => {
		let li = document.createElement('li');
		li.textContent = `${nombre}`;
		listaAmigos.appendChild(li);
	});
}

// Sortea un amigo aleatoriamente y muestra el resultado
function sortearAmigo() {
	
    let resultado = document.getElementById('resultado');
	resultado.innerHTML = '';

	if (amigos.length === 0) {
		alert('Añade al menos un nombre antes de sortear.');
		return;
	}

	let indice = Math.floor(Math.random() * amigos.length);
	let seleccionado = amigos[indice];

	const li = document.createElement('li');
	li.textContent = `¡El amigo secreto sorteado es: ${seleccionado}!`;
	resultado.appendChild(li);

    // Reiniciar la lista después del sorteo
    listaAmigos.innerHTML = '';
}

// Función: reiniciar la lista
function resetearLista() {
    // Vaciar el array de amigos
    amigos = [];

    // Actualizar la lista de amigos en la UI
    actualizarLista();

    // Limpiar el resultado del sorteo en la UI
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}