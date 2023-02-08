//First Method
function Validate(word) {
  let toChars = [...word]
  const typeChar = toChars.map(l => {
    if (!isNaN(l)) return "number"
    if (l === l.toUpperCase()) return "upperLetter"
    if (l === l.toLowerCase()) return "lowerLetter"
  })
  if (!typeChar.includes('number')) {
    console.log("* Enter a number")
  }
  if (!typeChar.includes("upperLetter")) {
    console.log("*Enter a capital letter")
  }
  if (!typeChar.includes("lowerLetter")) {
    console.log("* Enter a lowercase letter")
  }
  if (toChars.length < 8) {
    console.log("* Word length < 8")
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
