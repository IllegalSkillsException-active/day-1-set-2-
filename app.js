function jediName(first, last){
    let firstThree = first.slice(0,2); 
    let lastTwo = last.slice(0,3); 
    let jedi = lastTwo + firstThree; 
    return jedi; 
}
function beyond(num){
    if (num === Infinity || num === -Infinity){
        console.log('And Beyond!'); 
    }
    else if(num > 0 ){
        console.log('To Infinity!');
    }
    else if ( num < 0){
        console.log(' To negative infinity');
    }
    else if( num === 0 ){
        console.log( 'Staying home'); 
    }
}

//make an array of the argument .split(" ")
//define the codedWword 
//look at first character of each word in array
    //if character[0] === "a" 
    //let codedWord += character[1]
    
function decoder(string) {
    let array = string.split(" ");
    let codedWord = "";

    for (let i=0; i<array.length; i++) {
        if (array[i][0] === "a") {
            codedWord += array[i][1];
        } else if (array[i][0] === "b") {
            codedWord += array[i][2];
        } else if (array[i][0] === "c") {
            codedWord += array[i][3];
        } else if (array[i][0] === "d") {
            codedWord += array[i][4];
        } else {
            codedWord += " "
        }
    }
    return codedWord
}

console.log(decoder('craft block argon meter bells brown croon droop'))

function checkDaysInMonth(month, leapyear = true) {
    let days = ''

    if (leapyear && month === "February") {
        days = `${month} has 29 days`;
        return days;
    }

    switch(month) {
        case "February":
            days = `${month} has 28 days`;
            return days;
            break;
        case "April":
        case "June":
        case "September":
        case "November":  
            days = `${month} has 30 days`;
            return days;
            break;
        case "March": 
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
        case "January": 
            days = `${month} has 31 days`;
            return days;
            break;
    }
}
// one equals rock
// two equals paper 
// three equals scissors 
// rock beats scissors 
// paper beats rock 
// scissors beats paper 
// NEED random number between 1-3 
// NEED user input 
// assign variables to each outcome
// if user input beats the random number 
//     return success  you beat computer with number 
//     else return computer beat you with number 



function rockPaperScissors(input){
    let computerVar = ''; 
    let userInput = ''; 
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if(input > 3){
        throw new Error("You can't choose a number above 3!"); 
    }
    if ( randomNo === 1 ){
        computerVar = 'rock';
    }else if ( randomNo === 2 ){
        computerVar = 'paper';
    }else if ( randomNo === 3 ){
        computerVar = 'scissors';
    }
    if ( input === 1 ){
        userInput = 'rock';
    } else if ( input === 2 ){
        userInput = 'paper';
    } else if ( input === 3 ){
        userInput = 'scissors';
    }
    if( input === 2 && randomNo === 1 ){
        return `Congrats! You beat the computer's ${computerVar} with ${userInput}`
    }else if ( input === 1 && randomNo === 3){
        return `Congrats! You beat the computer's ${computerVar} with ${userInput}`
    }else if ( input === 3 && randomNo === 2){
        return `Congrats! You beat the computer's ${computerVar} with ${userInput}`
    }else if(input === randomNo){
        return `Tie! You both picked ${userInput}.`
    }
    else{
        return `Sorry! Computer beat your ${userInput} with ${computerVar}`
    }
} 
console.log( rockPaperScissors(4)); 