const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, () => {
    console.log('up and running on port : ', port);

}
);

app.get('/', function (req, res, next) {
    res.send("Hello world");
});