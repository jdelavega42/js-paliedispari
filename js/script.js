
const wordBtn = document.getElementById('word-btn');
const userWord = document.getElementById('user-word');
const sentence = document.getElementById('result1')
// const userWord = prompt('dimmi una parola');
wordBtn.addEventListener("click", function(){
    let validation = userWord.value;
    let checker = checkPalindrome(validation);
    let result = '';
    if ( checker === false) {
        result = `Questa parola non é palindroma!`;
    } else {
        result = `Questa parola é palindroma! Al contrario si legge ${userWord.value}`;
    }
    sentence.innerHTML = `${result}`
});

/**
 * Description
 * @param {string} wordToCheck
 * @returns {boolean}
 */
function checkPalindrome(wordToCheck) {
    let length = wordToCheck.length;
    isPalindrome = true;
    let i = 0;
    while (i < length / 2 && isPalindrome === true) {
        if (wordToCheck[i] !== wordToCheck[length - 1 - i]) {
            isPalindrome = false;
        } 
        i++
    }
    return isPalindrome;
}    




const submit = document.getElementById('die-btn');
const reset = document.getElementById('reset');
const botNumber = document.getElementById('bot-number');
const betResult = document.getElementById('result2')

submit.addEventListener('click', function(){       
    const numberChoice = document.getElementById('numbers');
    const numberChoiceInt = parseInt(numberChoice.value);
    const userBet = document.getElementById('odd-even');
    const userBetValue = userBet.value;
    const botDice = Math.floor(Math.random() * 6) +1;
    const evenOrOdd = oddOrEvenOfSum(numberChoiceInt, botDice);
    let numberSum = numberChoiceInt + botDice;
    console.log(evenOrOdd, userBetValue);
    
    if (evenOrOdd == userBetValue){
        result = `La somma di ${numberChoiceInt} e ${botDice} é  ${numberSum}, un numero ${evenOrOdd}. Complimenti, HAI VINTO!`;
    } else {
        result = `La somma di ${numberChoiceInt} e ${botDice} é  ${numberSum}, hai scelto ${userBetValue} ma é un numero ${evenOrOdd}. Ritenta, sarai più fortunato!!`;
    }
    betResult.innerHTML = `${result}`;




    let diceFaceY = '';
    if (botDice === 1) {
        diceFaceY = '&#9856';
    } else if (botDice === 2){
        diceFaceY = '&#9857';
    } else if (botDice === 3) {
        diceFaceY = '&#9858';
    } else if (botDice === 4) {
        diceFaceY = '&#9859';
    } else if (botDice === 5) {
        diceFaceY = '&#9860';
    } else if (botDice === 6) {
        diceFaceY = '&#9861';
    }
    botNumber.classList.toggle('dice');
    botNumber.innerHTML = diceFaceY;
    submit.classList.toggle('d-none');
    reset.classList.toggle('d-none');
})

reset.addEventListener('click', function() {
    submit.classList.toggle('d-none');
    reset.classList.toggle('d-none');
    botNumber.classList.toggle('dice');
    botNumber.innerHTML = '';
})

function oddOrEvenOfSum(numberOne, numberTwo) {
let operation = numberOne + numberTwo;
if (operation % 2 === 0){
    console.log('numero pari');
    return "pari";
} else {
    console.log('numero dispari');
    return "dispari";
}
}