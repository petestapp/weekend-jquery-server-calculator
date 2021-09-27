// requires
const express = require(`express`);
const app = express();
// uses

// server static files
app.use(express.static(`server/public`));
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