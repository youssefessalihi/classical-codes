//First Method
function Validate(word) {
  let toChars = [...word]
  const typeChar = toChars.map(l => {
    if (!isNaN(l)) return "number"
    if (l === l.toUpperCase()) return "upperLetter"
    if (l === l.toLowerCase()) return "lowerLetter"
  })
  if (!typeChar.includes('number')) {
    console.log("* Entrer un chiffre")
  }
  if (!typeChar.includes("upperLetter")) {
    console.log("* Entrer une lettre majuscule ")
  }
  if (!typeChar.includes("lowerLetter")) {
    console.log("* Entrer une lettre minuscule")
  }
  if (toChars.length < 8) {
    console.log("* Taille du mot < 8")
  }
}
Validate("helloS1311")

//Second method 
/*
  //use this expression :
  let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[0-9]).+$");
  // to test your word:
  patter.test(yourWord) // return boolean value 
 */
