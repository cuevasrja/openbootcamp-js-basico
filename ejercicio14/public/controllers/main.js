let nombres = [
    "Juan Cuevas",
    "Jose Hernandez",
    "Luis Perez",
    "Rafael Rodriguez"
];

const list = document.createElement('ul');
list.id = "nombres";
$("#nombres-header").after(list);

const mostrarNombres = () =>{
    nombres.forEach((n) => {
        const name = document.createElement('li');
        name.id = n.split(' ').join('-');
        name.textContent = n;
        list.appendChild(name);
        console.log(`${n} ha sido agregado a la lista`);
    });
}

const agregarNombre = (n) =>{
    const nombre = n.trim();
    const check = nombres.some(v => v === nombre);
    console.log(check);
    if (check) {
        alert(`${nombre} ya existe en esta lista`)
    } else {
        nombres = nombres.concat(nombre)
        const name = document.createElement('li');
        name.id = nombre.split(' ').join('-');
        name.textContent = nombre;
        list.appendChild(name);
        console.log(`${nombre} ha sido agregado a la lista`);
    }
}

mostrarNombres();

$('#agregar').click(()=>{
    agregarNombre($('#nombreNuevo').val());
    $('#nombreNuevo').val("");
})

$('#nombres').click(event =>{
    const nombreEliminado = event.target.textContent;
    const idEliminado = event.target.id;
    const check = confirm(`Desea eliminar a ${nombreEliminado} de la lista?`);
    if (check) {
        nombres = nombres.filter(nombre => nombre !== nombreEliminado);
        $(`#${idEliminado}`).remove();
    }
})