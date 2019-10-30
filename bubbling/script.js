window.onload = function() {
	main();
}

function main() {
	let arregloDeCantidades = document.getElementsByClassName('cantidad');
	for (let i=0; i<arregloDeCantidades.length; i++) {
		let cantidad = arregloDeCantidades[i];
		cantidad.onchange = cantidadOnChangeHandler;
	}
	document.getElementById('carrito').onchange = carritoOnChangeHandler;
	document.getElementById('btn_comprar').onclick = btn_comprarOnClickHandler;
	//document.getElementById('carrito').addEventListener("change", captureCarritoOnChangeHandler, true);
}

function cantidadOnChangeHandler(evento) {
	evento.target.classList.add("cantidadModificada");
	mostrarInfoDelEvento(evento);
}

function carritoOnChangeHandler(evento) {
	document.getElementById('carrito').style.borderColor = '#FDF2A1';
	//alert('BUBBLING');
}

// function captureCarritoOnChangeHandler() {
// 	alert('CAPTURE');
// }

function btn_comprarOnClickHandler() {
	mostrarInfoDelEvento(event);
}

function mostrarInfoDelEvento(unEvento) {
	console.log('unEvento.altKey: ' + unEvento.altKey);
	console.log('unEvento.ctrlKey: ' + unEvento.ctrlKey);
	console.log('unEvento.shiftKey: ' + unEvento.shiftKey);
	console.log('unEvento.button: ' + unEvento.button);
	console.log('unEvento.bubbles: ' + unEvento.bubbles);
	console.log('unEvento.cancelable: ' + unEvento.cancelable);
	console.log('unEvento.cancelBubble: ' + unEvento.cancelBubble);
	console.log('unEvento.charCode: ' + unEvento.charCode);
	console.log('unEvento.clientX: ' + unEvento.clientX);
	console.log('unEvento.clientY: ' + unEvento.clientY);
	console.log('unEvento.currentTarget: ' + unEvento.currentTarget);
	console.log('unEvento.target: ' + unEvento.target);
	console.log('unEvento.detail: ' + unEvento.detail);
	console.log('unEvento.eventPhase: ' + unEvento.eventPhase);
	console.log('unEvento.isChar: ' + unEvento.isChar);
	console.log('unEvento.keyCode: ' + unEvento.keyCode);
	console.log('unEvento.metaKey: ' + unEvento.metaKey);
	console.log('unEvento.pageX: ' + unEvento.pageX);
	console.log('unEvento.pageY: ' + unEvento.pageY);
	console.log('unEvento.relatedTarget: ' + unEvento.relatedTarget);
	console.log('unEvento.screenX: ' + unEvento.screenX);
	console.log('unEvento.screenY: ' + unEvento.screenY);
	console.log('unEvento.timeStamp: ' + unEvento.timeStamp);
	console.log('unEvento.type: ' + unEvento.type);
	//unEvento.preventDefault();
	//unEvento.stopPropagation();
}