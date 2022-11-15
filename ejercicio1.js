//CHALLENGE 1: REVERSE A STRING
//Return a string in reverse
//ex.  reverseString('hello') === 'olleh"


//solution #1:
function reverseString (str) {
    const strArr = str.split('');//transformar un string en un array con el metodo "split"
    strArr.reverse(); //invertir el array con el metodo "reverse"
    return strArr.join(''); //volver a convertir el array en un string usando el metodo "join"
}

reverseString('hello');//olleh




//// Luego, se deberia "limpiar" el codigo anterior en una sola linea:


function reverseString (str) {
    return str.split('').reverse().join('');
}

reverseString('hello');