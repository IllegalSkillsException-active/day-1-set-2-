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

console.log(checkDaysInMonth("May"))