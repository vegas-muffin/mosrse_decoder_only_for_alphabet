const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};
function decode(expr) {
  let newarr = expr.split("");
  let k = 0;
  for (let i = 0; i < newarr.length; i++) {
    if (newarr[i] + newarr[i + 1] == 10) {
      newarr.splice(i, 2, ".");
    } else if (newarr[i] + newarr[i + 1] == 11) {
      newarr.splice(i, 2, "-");
    } else if (newarr[i] + newarr[i + 1] == 00) {
      newarr.splice(i, 2, "+");
    } else if (newarr[i] == "*") {
      newarr.splice(i, 10, "+=+");
    }
  }
  let newarr3 = newarr.join();
  let newarr4 = "";
  for (let j = 0; j < newarr3.length; j++) {
    if (newarr3[j] != ",") {
      newarr4 = newarr4 + newarr3[j];
    }
  }
  let newarr5 = newarr4.split("+");
  let newarr6 = "";
  for (let z = 0; z < newarr5.length; z++) {
    for (key in MORSE_TABLE) {
      if (key === newarr5[z]) {
        newarr6 = newarr6 + MORSE_TABLE[key];
      }
    }
    if (newarr5[z] == "=") {
      newarr6 = newarr6 + " ";
    }
  }
  return newarr6;
}
