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
