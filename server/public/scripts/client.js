$(document).ready(onReady)

function onReady() {
    console.log('hi from jq');
    $('#buttonSum').on('click', addition);
    $('#buttonSubtract').on('click', subtraction);
    $('#buttonMultiply').on('click', multiply);
    $('#buttonDivide').on('click', divide);
    $('#buttonSubmit').on('click', postToServer);
    $('#buttonClear').on('click', clearInputs)
    appendHistory();

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
    let objectToPost = objectArray[objectArray.length - 1];
    $.ajax({
        type: 'POST',
        url: '/calculate',
        data: {
            objectToCalculate : objectToPost,
        }
    }).then(function () {
        console.log('Equation POST to server at route /calculate');
        getFromServer();
        objectArray.pop;
        $('#inputFirst').val('');
        $('#inputSecond').val('');
        appendHistory();
    });
};

function getFromServer() {
    $.ajax({
        type: 'GET',
        url: '/calculate'
    }).then(function (value) {
        $('#answer').empty();
        $('#answer').append(value.answer);
    })
};

function appendHistory() {
    $.ajax({
        type: 'GET',
        url: '/history'
    }).then(function (array) {
        $('#containerHistory').empty();
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            $('#containerHistory').append(`<li>${element.inputOne} ${element.operator} ${element.inputTwo} = ${element.answer}</li>`)
        }
    })
};





console.log('hi from js');

