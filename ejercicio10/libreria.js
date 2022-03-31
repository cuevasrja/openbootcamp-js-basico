import moment from "moment"

const saludar = (n) => console.log(`Hola, ${n}`);

const hora = () => console.log(`La hora es ${moment().hour()} : ${moment().minute()}`);

export {saludar, hora}
