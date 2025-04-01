document.getElementById('calculate').addEventListener('click', function() {
    var numA = parseFloat(document.getElementById('numA').value);
    var numB = parseFloat(document.getElementById('numB').value);
    var operation = document.getElementById('operations').value;
    var result;

    if (isNaN(numA) || isNaN(numB)) {
        alert("Please enter valid numbers.");
        return;
    }

    switch (operation) {
        case '+': result = numA + numB; break;
        case '-': result = numA - numB; break;
        case '*': result = numA * numB; break;
        case '/':
            if (numB === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = numA / numB;
            break;
    }

    document.getElementById('result').textContent = `Result: ${numA} ${operation} ${numB} = ${result}`;

    var history = document.getElementById('history');
    var li = document.createElement('li');
    li.textContent = `${numA} ${operation} ${numB} = ${result}`;
    history.appendChild(li);
});

document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('numA').value = '';
    document.getElementById('numB').value = '';
    document.getElementById('operations').value = '+';
    document.getElementById('result').textContent = 'Result will appear here';
});