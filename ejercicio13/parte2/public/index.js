$('p').each(function() {
    this.oncopy = function() {
        if (this.getAttribute("value") === "Caracas") {
            alert("¡Correcto!");
        } else {
            alert("Incorrecto, prueba de nuevo");
        }
    }
})