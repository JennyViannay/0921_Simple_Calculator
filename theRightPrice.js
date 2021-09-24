const userName = prompt('Give your name :');
if (userName) {
    const random = Math.floor(Math.random() * 100) + 1;
    let userNumber = prompt('Choose number between 1 & 100 :');
    while (parseInt(userNumber) !== random) {
        if (userNumber < random) {
            console.log('It\'s more');
            userNumber = prompt('Choose number up to :' + userNumber);
        }
        if (userNumber > random) {
            console.log('It\'s less');
            userNumber = prompt('Choose number under to :' + userNumber);
        }
        if (parseInt(userNumber) === random) {
            alert('You win !')
        }
    }
}
15

if (3) {
    return 
}
if (3 || 5) {
    return 
}  
if (5) {
    return 
}


