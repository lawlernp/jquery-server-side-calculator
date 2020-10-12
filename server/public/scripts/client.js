$(document).ready(onReady)

function onReady() {
    console.log('hi from jq');
    $('#buttonSum').on('click', addition); //listening for clicks on DOM
    $('#buttonSubtract').on('click', subtraction);
    $('#buttonMultiply').on('click', multiply);
    $('#buttonDivide').on('click', divide);
    $('#buttonSubmit').on('click', postToServer);
    $('#buttonClear').on('click', clearInputs) //end listening
    appendHistory();

}

let objectArray = []; //array to store inputs

function addition() {  // functions for grabbing inputs from DOM
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
}; // end input grabbing functions


function postToServer() { // send inputs as object to server
    let objectToPost = objectArray[objectArray.length - 1];
    $.ajax({
        type: 'POST',
        url: '/calculate',
        data: {
            objectToCalculate : objectToPost,  //defining key:value for object to be sent
        }
    }).then(function () {
        getFromServer();
        objectArray.pop;  // resetting inputs
        $('#inputFirst').val('');
        $('#inputSecond').val(''); //end resetting
        appendHistory();
    });
};

function getFromServer() {  //get route for answer
    $.ajax({
        type: 'GET',
        url: '/calculate'
    }).then(function (value) {
        $('#answer').empty(); // clears answer span
        $('#answer').append(value.answer);  //adds in current answer
    })
};

function appendHistory() {  //get route for history
    $.ajax({
        type: 'GET',
        url: '/history'
    }).then(function (array) {
        $('#containerHistory').empty();  // clearing history before reappending
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            $('#containerHistory').append(`<li>${element.inputOne} ${element.operator} ${element.inputTwo} = ${element.answer}</li>`)  // append updated history array to DOM
        }
    })
};


