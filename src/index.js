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
    '>_<': ' ',
};
// 0010101010 h
// '....'
// 0000000010 e
// '.'
// 0010111010 l
// '.-..'
// 0010111010 l
// '.-..'
// 0000111111 o
// '---'
function decode(expr) {
let exprLenght = expr.length
console.log(exprLenght)
let n = exprLenght / 10
console.log(n)
let finalStr = ''
let str = ''
for (let i = 0; i <= (n - 1); i++) { 
    let morse = expr.slice(i * 10, (i + 1) * 10); 
    // console.log(morse);
    for (let i = 0; i < 9 ; i = i + 2){
        let a = morse.slice(i , i+2)
        // console.log(a)
        if(a == '**'){console.log('yep'); str += '>_<' ;break}
        else if(a == '10'){str += '.'}
        else if(a == '11'){str += '-'}
    }
    console.log(MORSE_TABLE[str])
    finalStr += MORSE_TABLE[str]
    str = ''
}
return finalStr
}
module.exports = {
    decode
}