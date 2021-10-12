function computerPlay() {
    const number = getRandomNumber();
    return number;
}
console.log(computerPlay());

function getRandomNumber() {
    return Math.ceil(Math.random() * 3);
}