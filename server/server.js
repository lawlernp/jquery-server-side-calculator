const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 5000;

let calcArray

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log('up and running on port : ', port);

}
);

app.post('/calculate', (req, res) => {
    let objectToCalculate = req.body; 
    calcArray.push(objectToCalculate);     
    res.sendStatus(200);
});