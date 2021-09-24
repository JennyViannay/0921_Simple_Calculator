function getResult(firstValue, operator, secondValue) {
    switch (operator) {
        case "+":
            return parseInt(firstValue) + parseInt(secondValue);
        case "-":
            return parseInt(firstValue) - parseInt(secondValue);
        case "/":
            if (parseInt(secondValue) === 0) {
                return "Divide by 0 is impossible !";
            } else {
                return parseInt(firstValue) / parseInt(secondValue);
            }
        case "*":
            return parseInt(firstValue) * parseInt(secondValue);
        default :
            return "Invalid Operator";
    }
}

document.getElementById('submit').addEventListener('click', event => {
    event.preventDefault()
    const firstValue = document.getElementById('firstValue').value;
    const secondValue = document.getElementById('secondValue').value;
    const operator = document.getElementById('operator').value;

    if (firstValue && secondValue && operator) {
        document.getElementById('result').classList.remove('d-none');
        document.getElementById('result').innerHTML = getResult(firstValue, operator, secondValue);
    } else {
        document.getElementById('result').classList.remove('d-none');
        document.getElementById('result').innerHTML = "All fields are required !";
    }   
})