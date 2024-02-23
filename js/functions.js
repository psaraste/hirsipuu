const input = document.querySelector('input')
const output = document.querySelector('output')
const span = document.querySelector('span')

const words = [
    "sopimaton",
    "laskettelija",
    "projektori",
    "sisukas",
    "suolisto", 
    "ruokalaji",
    "koirankarva",
    "selkokieli",
    "hirsipuu"
]

let randomizedWord = ''
let maskedWord = ''
let arvaukset = 0

const newGame = () => {
    arvaukset = 0
    const random = Math.floor(Math.random() * 9 ) + 1
    randomizedWord = words [random]
    maskedWord = "*".repeat(randomizedWord.length)
    console.log(randomizedWord)
    output.innerHTML = maskedWord
    
}

const win = () => {
    alert('You have guessed right, the word is: ' + randomizedWord + ".")
    newGame()
}

const replaceFoundChars = (guess) => {
    for (let i = 0; i<randomizedWord.length; i++) {
        const char = randomizedWord.substring(i,i+1)
        if (char === guess) {
            let newString = maskedWord.split('')
            newString.splice(i,1,guess)
            newString = newString.join('')
            maskedWord = newString
        }
    }
    output.innerHTML = maskedWord
}

const updateGuessCount = () => {
    span.innerHTML = arvaukset
}

newGame()

input.addEventListener('keypress',(e) => {
    
    if (e.key === 'Enter') {
        e.preventDefault()

        arvaukset ++

        console.log(arvaukset)

        const guess = input.value
        
        if (guess.toLowerCase() === randomizedWord.toLowerCase()) {
            win()
        } else if (guess.length === 1 && randomizedWord.toLowerCase().includes(guess.toLowerCase())) {
            replaceFoundChars(guess)
            if (maskedWord.toLocaleLowerCase() === randomizedWord.toLocaleLowerCase()) {
                win()
            }
        } else {
            alert("You guessed wrong!")
        }
        input.value=''

        updateGuessCount()
        
    }
})



