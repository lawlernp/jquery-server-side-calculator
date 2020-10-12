const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 5000;

let calcArray = [
// storing current inputs in object sent from client
]
let historyArray = [
// history of sent objects from client
]
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/calculate', (req, res) => {  //recieves inputs from client as object and pushes object to calcArray array
    let objectToCalculate = req.body;
    calcArray.push(objectToCalculate);
    res.sendStatus(200);
});

app.get('/calculate', (req, res) => {  //sends calcArray through calculate functions
    let answer = calculate(calcArray);
    console.log(calcArray);
    calcArray.pop();  // removes current inputs from calcArray
    res.send(answer); // sends answer to client
});

app.get('/history', (req, res) => { // sends historyArray over to client
    res.send(historyArray);
});


function calculate(array) {  // start calculate functions
    let equation = array[array.length - 1].objectToCalculate;
    if (equation.operator === '+') {  // checks object operator key
        let answer = Number(equation.inputOne) + Number(equation.inputTwo);  //  grabs values from current calculation object and performs math
        let answerObj = {
            inputOne: equation.inputOne,
            operator: equation.operator,
            inputTwo: equation.inputTwo,
            answer: answer
        } // building object for history array
        calcArray.pop;  // clearing calcArray after calculation
        historyArray.push(answerObj); // pushing new object to historyArray
        return answerObj;
    }
    else if (equation.operator === '-') {
        let answer = Number(equation.inputOne) - Number(equation.inputTwo);
        let answerObj = {
            inputOne: equation.inputOne,
            operator: equation.operator,
            inputTwo: equation.inputTwo,
            answer: answer
        }
        calcArray.pop;
        historyArray.push(answerObj);
        return answerObj;
    }
    else if (equation.operator === '*') {
        let answer = Number(equation.inputOne) * Number(equation.inputTwo);
        let answerObj = {
            inputOne: equation.inputOne,
            operator: equation.operator,
            inputTwo: equation.inputTwo,
            answer: answer
        }
        calcArray.pop;
        historyArray.push(answerObj);
        return answerObj;
    }
    else if (equation.operator === '/') {
        let answer = Number(equation.inputOne) / Number(equation.inputTwo);
        let answerObj = {
            inputOne: equation.inputOne,
            operator: equation.operator,
            inputTwo: equation.inputTwo,
            answer: answer
        }
        calcArray.pop;
        historyArray.push(answerObj);
        return answerObj;
    }
};



app.listen(port, () => {  // listening to port 5000 for connections
    console.log('up and running on port : ', port);

}
);

