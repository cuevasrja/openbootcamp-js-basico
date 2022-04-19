function randomColor() {
    let n = Math.round(Math.random() * 16777215);
    let hexColor = "#" + n.toString(16);
    return hexColor;
}

$('#box').click(function() {
    const color = randomColor();
    $(this).css("background-color", color);
    console.log(`%cCambio de color a ${color}`, "color: yellow");
})
$('#box').dblclick(function() {
    const condition = $(this).css("border-radius") === "0px"? true : false;
    if (condition) {
        $(this).css("border-radius", "50%");
        console.log(`%cCambio de forma a: circulo`, "color: yellow");   
    } else {
        $(this).css("border-radius", "0");
        console.log(`%cCambio de forma a: cuadrado`, "color: yellow");
    }
})