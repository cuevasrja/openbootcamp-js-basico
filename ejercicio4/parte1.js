let word = "El perro de mi vecina es muy molesto";

const change = () =>{
  console.log("------------------------");
  console.log(word);
  const array = word.split(' ');
  if (array.includes("vecina")) {
    const idx = array.indexOf("vecina");
    array[idx] = "vecino"; 
  } else if(array.includes("vecino")){
    const idx = array.indexOf("vecino");
    array[idx] = "vecina";
  }
  word = array.join(" ");
  console.log(word);
  console.log("------------------------");
}

change();

change();
