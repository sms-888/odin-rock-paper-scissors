// Rock Paper Scissors

function getRandomIndex(length) {
    // check if length is an integer > 0
    if (Number.isInteger(length) && length > 0) {
        return Math.floor(Math.random() * length);
    } else {
        return "Error: require an integer length greater than 0";
    }
}

function getComputerChoice() {
    // define string array with rock,paper,scissors choices
    const rpsChoices = ['rock', 'paper', 'scissors'];
    
    // get random index passing array length to getRandomIndex function
    let randIndex = getRandomIndex(rpsChoices.length);

    // return random rpsChoises array element
    return rpsChoices[randIndex];
}
