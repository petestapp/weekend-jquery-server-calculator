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
    console.log(`/calculations GET hit`);
    res.send(calculations);
}) // end /calculations GET

app.post(`/calculations`, (req, res)=>{
    console.log(`/calculations POST hit:`, req.body);
    calculations.push(req.body);
    res.sendStatus(200);
})