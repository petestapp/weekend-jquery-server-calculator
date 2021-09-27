// requires
const express = require(`express`);
const app = express();
const bodyParser = require ('body-parser');
// uses
app.use( express.static( 'server/public'));
app.use( bodyParser.urlencoded( {extended: true}));
// globals
const port = 5000;
let calculations = [];
// spin up server
app.listen(port, () =>{
    console.log(`server is up on:`, port);
})
// routes
app.get(`/calculations`, (req, res)=>{
    res.send(calculations);
}) // end /calculations GET

app.post(`/calculations`, (req, res)=>{
    calculate(req.body);
    calculations.push(req.body);
    res.sendStatus(200);
})

function calculate(input){
    let result;
    if (input.operation === `+`){
        result = Number(input.firstOperand) + Number(input.secondOperand);
    }
    if (input.operation === `-`){
        result = Number(input.firstOperand) - Number(input.secondOperand);
    }
    if (input.operation === `*`){
        result = Number(input.firstOperand) * Number(input.secondOperand);
    }
    if (input.operation === `/`){
        result = Number(input.firstOperand) / Number(input.secondOperand);
    }
    input.result = result;
}