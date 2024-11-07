const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const symbols = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '-', '_', '+', '=', '{', '}', '[', ']', ';', ':'
];

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const checkboxLetters = document.getElementById("letters");
const checkboxNumbers = document.getElementById("numbers");
const checkboxSymbols = document.getElementById("symbols");

let numberOfOptions = 0;
let savedOptions = 0;
let areLetters = false;
let areNumbers = false;
let areSymbols = false;

function checkCheckBoxes() {
    if (checkboxLetters.checked) numberOfOptions++
    if (checkboxNumbers.checked) numberOfOptions++
    if (checkboxSymbols.checked) numberOfOptions++
    savedOptions = numberOfOptions;
    numberOfOptions = 0
}

function getPasswordLength() {
    const selected = document.getElementById("lenght");
    return parseFloat(selected.value);
}

function isLettersChecked() {
    if (checkboxLetters.checked) areLetters = true
}

function isNumbersChecked() {
    if (checkboxNumbers.checked) areNumbers = true
}

function isSymbolsChecked() {
    if (checkboxSymbols.checked) areSymbols = true
}

function whichTypes() {
    isSymbolsChecked()
    isLettersChecked()
    isNumbersChecked()
    let whichTypes = []
    if (areLetters == true) {
        whichTypes.push("letters")
        areLetters = false;
    }
    if (areNumbers == true) {
        whichTypes.push("numbers")
        areNumbers = false;
    }
    if (areSymbols == true) {
        whichTypes.push("symbols")
        areSymbols = false
    }
    return whichTypes

}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let password = "";

function generate() {

    let options = whichTypes()
    checkCheckBoxes()
    passwordLenght = getPasswordLength();
    password = "";

    for (let i = 0; i < passwordLenght; i++) {
        let number = getRandomInt(options.length)

        let chosenOne = options[number]

        if (chosenOne == "letters") {
            let chooseLetter = getRandomInt(letters.length)
            let newLetter = letters[chooseLetter]
            password += newLetter
        }

        if (chosenOne == "numbers") {
            let chooseNumber = getRandomInt(numbers.length)
            let newNumber = numbers[chooseNumber]
            password += newNumber
        }


        if (chosenOne == "symbols") {
            let chooseSymbol = getRandomInt(numbers.length)
            let newSymbol = symbols[chooseSymbol]
            password += newSymbol
        }
        // console.log("password: " + password)
    }
    console.log("password: " + password)

    const passwords = document.getElementById("passwordsList")
    const newEntry = document.createElement("p");
    newEntry.textContent = password;
    passwords.prepend(newEntry);


}



