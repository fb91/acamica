window.onload = function() {
	main();
}

function main() {
	let arrayBotonesMostrarOcultarCorreo = document.getElementsByClassName('mostrarOcultarCorreo');
	for (let i=0; i<arrayBotonesMostrarOcultarCorreo.length; i++) {
		arrayBotonesMostrarOcultarCorreo[i].addEventListener("click", onOcultarCorreoClickHandler);
	}
}

function onOcultarCorreoClickHandler() {
	let buttonNode = event.target;
	let contactNode = buttonNode.parentElement;
    let mailNode = contactNode.getElementsByClassName("mail")[0];
    mailNode.style.display = 'none';
    buttonNode.value = 'mostrar';
    event.target.removeEventListener('click', onOcultarCorreoClickHandler);
    event.target.addEventListener("click", onMostrarCorreoClickHandler);
}

function onMostrarCorreoClickHandler() {
	event.target.parentElement.getElementsByClassName("mail")[0].style.display = 'inline-block';
	event.target.value = 'ocultar';
	event.target.removeEventListener('click', onMostrarCorreoClickHandler);
	event.target.addEventListener("click", onOcultarCorreoClickHandler);
}