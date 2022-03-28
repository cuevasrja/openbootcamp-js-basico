let word = "El perro de mi vecina es muy molesto";

const change = () =>{
  console.log("-------------------------------------");
  console.log(word);
  if (word == word.toUpperCase()) {
    word = word.toLowerCase();
  } else {
    word = word.toUpperCase();
  }
  console.log(word);
  console.log("-------------------------------------");
}

change();

change();
