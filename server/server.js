const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 5000;

let calcArray

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

function calculate(array) {
    let equation = array[array.length - 1].objectToCalculate;
    if (equation.operator === '+') {
        let answer = Number(equation.inputOne) + Number(equation.inputTwo);
        let answerObj = {
            inputOne: equation.inputOne,
            operator: equation.operator,
            inputTwo: equation.inputTwo,
            answer: answer
        }
        currentCalculation.pop;
        calculationHistory.push(answerObj);
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
        currentCalculation.pop;
        calculationHistory.push(answerObj);
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
        currentCalculation.pop;
        calculationHistory.push(answerObj);
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
        currentCalculation.pop;
        calculationHistory.push(answerObj);
        return answerObj;
    }
};



app.listen(port, () => {
    console.log('up and running on port : ', port);

}
);

app.post('/calculate', (req, res) => {
    let objectToCalculate = req.body; 
    calcArray.push(objectToCalculate);     
    res.sendStatus(200);
});