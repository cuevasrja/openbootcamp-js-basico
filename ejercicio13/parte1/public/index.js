// const b = document.getElementById('box');

// const overDiv = () =>{
//     b.style.backgroundColor = 'red';
//     console.log('El fondo del div cambio a rojo');
// }

// const outDiv = () =>{
//     b.style.backgroundColor = 'blue'
//     console.log('El fondo del div cambio a azul');
// }

$("#box").hover(function() {
    $(this).css("background-color", "blue");
    console.log('%cCambio de color a azul', "color: yellow");
}, function () {
    $(this).css("background-color", "red");
    console.log('%cCambio de color a rojo', "color: yellow");
})