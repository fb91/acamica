var modelo = {
	nombre: 'Jorge',
	setNombre: function(nom) {
		this.nombre = nom;
    },
    getNombre: function() {
        return this.nombre;
    }
}

var vista = {
	render: function(nombre) {
        let texto = document.getElementById("texto")
		texto.innerHTML = '<p>Bienvenido ' + nombre + '!</p>';
	}
}

var controlador = {
    inicializar: function() {
        vista.render(modelo.getNombre());
        document.getElementById("cambiar").addEventListener("click", function(e) {
            modelo.setNombre(prompt("Ingrese nombre"));
            vista.render(modelo.getNombre());
        });
	}
}