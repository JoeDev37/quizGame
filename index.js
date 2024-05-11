
const prompt = require('prompt-sync')();
const name = prompt('Enter your name: ');
console.log('welcom to my world!', `${name}`);
console.log("i'm gonna ask you 10 questions about my favourite things 😊😉 and something about myself");

let numberOfQuestions = 1;
let guessedAnswer = 0;
const percentage = 10;

//1st Question ABOUT NAME

const questionOne = prompt(`${numberOfQuestions++}, ` + 'What is my name?: ');
const answerOne = 'joe';

if(questionOne.toLowerCase() === answerOne) {
    console.log('You got it Correct! ✔️');
    guessedAnswer += 1;
} else {
    console.log(`${questionOne}`, 'is not my name... ❌');
}

//2nd Question ABOUT ANIME STUFF

const questionTwo = prompt(`${numberOfQuestions++}, ` + 'What is my favourite anime?: ');
const answerTwo = 'naruto';

if(questionTwo.toLowerCase() === answerTwo) {
    console.log('You got it Correct! ✔️');
    guessedAnswer += 1;
} else {
    console.log(`${questionTwo}`, 'is not my favourite anime... ❌');
}

//3rd Question ABOUT FOOD

const questionThree = prompt(`${numberOfQuestions++}, ` + 'What is my favourite food?: ');
const answerThree = 'noodles';

if(questionThree.toLowerCase() === answerThree) {
    console.log('You got it Correct! ✔️');
    guessedAnswer += 1;
} else {
    console.log(`${questionThree}`, 'is not my favourite food... ❌');
}

// 4th Question ABOUT MUSIC

function aboutMusic(guess){
    const musicOneIncluded = guess.toLowerCase().includes('another love');
    const musicTwoIncluded = guess.toLowerCase().includes('death bed');

    if(musicOneIncluded && musicTwoIncluded) {
        return 'full';
    } else if(musicOneIncluded || musicTwoIncluded) {
        return 'half';
    } else {
        return 'none';
    }
}

const questionFour = prompt(`${numberOfQuestions++}, ` + 'What are my favourite musices?: ');
const answerFour = 'another love and death bed';

if(questionFour.toLowerCase() === answerFour) {
    console.log('You got it Correct! ✔️');
    guessedAnswer += 1;
} 
else {
    const result = aboutMusic(questionFour);
    if(result === 'full') {
        console.log('You got it Correct! ✔️');
        guessedAnswer += 1
    } else if(result === 'half') {
        console.log('50% correct');
    } else {
        console.log(`${questionFour}`, 'is not my favourite music... ❌')
    }
} 

// 5th Question ABOUT COLOR

function aboutColor(guess) {
    const blackIncluded = guess.toLowerCase().includes('black');
    const blueIncluded = guess.toLowerCase().includes('blue');

    if (blackIncluded && blueIncluded) {
        return 'full';
    } else if (blackIncluded || blueIncluded) {
        return 'half';
    } else {
        return 'none';
    }
}

const questionFive = prompt(`${numberOfQuestions++}, What are my favourite colours?: `);
const answerFive = 'black and blue';

if (questionFive.toLowerCase() === answerFive) {
    console.log('You got it Correct! ✔️');
    guessedAnswer += 1;
} 
else {
    const result = aboutColor(questionFive);
    if (result === 'full') {
        console.log('You got it Correct! ✔️');
        guessedAnswer += 1;
    } else if (result === 'half') {
        console.log('50% correct');
    } else {
        console.log(`${questionFive} is not my favourite colour... ❌`);
    }
}

// 6th Question ABOUT SHARINGAN

const questionSix = prompt(`${numberOfQuestions++}, ` + 'what is my favourite mangekyou sharingan?: ');
const answerSix = 'kamui';

if(questionSix === answerSix) {
    console.log('You got it Correct! ✔️');
    guessedAnswer += 1;
} else {
    console.log(`${questionSix}`, 'is not my favourite mangekyou sharingan... ❌');
}

// 7th Question ABOUT CHARACTERS

function aboutCharacters(guess) {
    const characterOne = guess.toLowerCase().includes('hinata');
    const characterTwo = guess.toLowerCase().includes('tsunade');

    if(characterOne && characterTwo) {
        return 'full';
    } else if(characterOne || characterTwo) {
        return 'half'
    } else {
        return 'none'
    }
}

const questionSeven = prompt(`${numberOfQuestions++}, ` + 'What is my two favourite women anime characters?: ');
const answerSeven = 'hinata and tsunade';

if(questionSeven.toLowerCase() === answerSeven) {
    console.log('You got it Correct! ✔️');
    guessedAnswer += 1
}
else {
    result = aboutCharacters(questionSeven);
    if(result === 'full') {
        console.log('You got it Correct! ✔️');
        guessedAnswer += 1
    } else if(result === 'half') {
        console.log('50% correct')
    } else {
        console.log(`${questionSeven} are not my favourite characters ... ❌`)
    }
}

// 8th Questions ABOUT ANIMALS

const questionEight = prompt(`${numberOfQuestions},` + 'What is my favourite domestic animal?: ');
const answerEight = 'dog';

if(questionEight.toLowerCase() === answerEight) {
    console.log('You got it Correct! ✔️');
    guessedAnswer += 1;
} else {
    console.log(`${questionEight} ` + 'is not my favourite domestic animal... ❌');
}

// 9th Question ABOUT WILD ANIMAL

const questionNine = prompt(`${numberOfQuestions}, ` + 'What is my favourite wild animal?: ');
const answerNine = 'wolf';

if(questionNine.toLowerCase() === answerNine) {
    console.log('You got it Correct! ✔️');
    guessedAnswer += 1;
} else {
    console.log(`${questionNine} ` + 'is not my favourite wild animal... ❌');
}

// 10th Questions ABOUT GLASSES

const questionTen = prompt(`${numberOfQuestions}, ` + 'Do i wear glasses?: ');
const answerTen = 'YES';

if(questionTen.toUpperCase() === answerTen) {
    console.log('You got it Correct! ✔️');
    guessedAnswer += 1;
} else {
    console.log('I do wear glasses!!!');
}


const percent = Math.round(guessedAnswer / percentage * 100 );

console.log('you got', `${guessedAnswer}`, 'questions', 'Correct!');
console.log('You got ' + `${percent}` + '%');

