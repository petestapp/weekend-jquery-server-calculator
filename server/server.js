// requires
const express = require(`express`);
const app = express();
// uses

// server static files
app.use(express.static(`server/public`));
// globals
const port = 5000;
// spin up server
app.listen(port, () =>{
    console.log(`server is up on:`, port);
})
// routes