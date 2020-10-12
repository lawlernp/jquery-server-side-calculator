$(document).ready(onReady)

function onReady() {
    console.log('hi from jq');
    $('#buttonSum').on('click', addition);
    $('#buttonSubtract').on('click', subtraction);
    $('#buttonMultiply').on('click', multiply);
    $('#buttonDivide').on('click', divide);
    $('#buttonSubmit').on('click', postToServer);
    $('#buttonClear').on('click', clearInputs)

}

let objectArray = [];

function addition() {
    console.log('in addition');
    let object = {
        inputOne: $('#inputFirst').val(),
        operator: '+',
        inputTwo: $('#inputSecond').val()
    };
    console.log('Adding:', object);
    objectArray.push(object);
};

function subtraction() {
    console.log('in subtraction');
    let object = {
        inputOne: $('#inputFirst').val(),
        operator: '-',
        inputTwo: $('#inputSecond').val()
    };
    console.log('Subtracting:', object);
    objectArray.push(object);
};

function multiply() {
    console.log('in multiply');
    let object = {
        inputOne: $('#inputFirst').val(),
        operator: '*',
        inputTwo: $('#inputSecond').val()
    };
    console.log('Multiplying:', object);
    objectArray.push(object);
};

function divide() {
    console.log('in divide');
    let object = {
        inputOne: $('#inputFirst').val(),
        operator: '/',
        inputTwo: $('#inputSecond').val()
    };
    console.log('Dividing:', object);
    objectArray.push(object);
};

function postToServer() {
    let objectToPost = calculation[calculation.length - 1];
    $.ajax({
        type: 'POST',
        url: '/calculate',
        data: {
            objectToCalculate: objectToPost,
        }
    }).then(function () {
        console.log('Equation POST to server at route /calculate');
        getFromServer();
        calculation.pop;
        $('#firstNumber').val('');
        $('#secondNumber').val('');
        appendHistory();
    });
};

function postToServer() {
    let objectToPost = objectArray[objectArray.length - 1];
    $.ajax({
        type: 'POST',
        url: '/calculate',
        data: {
            objectArray: objectToPost,
        }
    }).then(function () {
        console.log('Equation POST to server at route /calculate');
        getFromServer();
        calculation.pop;
        $('#inputFirst').val('');
        $('#inputSecond').val('');
        appendHistory();
    });
};



console.log('hi from js');

