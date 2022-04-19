function plus() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;

    document.getElementById('out').innerHTML = result;
}

function minus() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;

    document.getElementById('out').innerHTML = result;
}

function divide() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    if (num2 == 0) {
        result = 'Тут на ноль не делят!'
    } else { 
        result = num1 / num2;
    }
    document.getElementById('out').innerHTML = result;
}

function multiply() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 * num2;

    document.getElementById('out').innerHTML = result;
}

function check(){
    let result = document.getElementById('out').value;
    if(result == 'num1 / 0');
    alert("Тут на ноль не делят!");
    console.log('out');
}



 //let Name = prompt("what is your name");
//document.write ("Hello" + Name );

