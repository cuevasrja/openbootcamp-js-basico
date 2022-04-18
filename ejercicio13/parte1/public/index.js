// const b = document.getElementById('box');

// const overDiv = () =>{
//     b.style.backgroundColor = 'red';
//     console.log('El fondo del div cambio a rojo');
// }

// const outDiv = () =>{
//     b.style.backgroundColor = 'blue'
//     console.log('El fondo del div cambio a azul');
// }

function randomColor() {
    let n = Math.round(Math.random() * 16777215);
    let hexColor = "#" + n.toString(16);
    return hexColor;
}

$("#box").hover(function() {
    const color = randomColor();
    $(this).css("background-color", color);
    console.log(`%cCambio de color a ${color}`, "color: yellow");
}, function () {
    $(this).css("background-color", "white");
    console.log('%cCambio de color a: white', "color: yellow");
})