const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    
    let MORSE_STRING = [];
    for (let i of expr.match(/[0-9*]{1,10}/g)) {
      if (i === "**********") {
       i = MORSE_STRING.push(" ");
      } else {
          let word = [];
          const arr = i.toString().match(/[0-9*]{1,2}/g);
              for (let init of arr) {
                if (init === "10") {
                  init = word.push(".");
                }
                else if (init === "11") {
                  init = word.push("-");
                }
              }
      let MORSE_WORD = MORSE_TABLE[word.join("")];
       MORSE_STRING.push(MORSE_WORD);
        }
    }
    return  MORSE_STRING.join('');
  }
  
module.exports = {
    decode
}