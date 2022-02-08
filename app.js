// Importing express module
const express = require('express');

const port = 3000;

// initializing express
const app = express();

// json parser
app.use(express.json());
//app.use('/', (req, res) => res.send('Hello World SGWebFreelancer'));

// Get method - whenever 'home route' is hit the Anonymous function will be invoked
app.get("/", (req, res) =>
{ 
    res.send("<h1>Welcome to Movie-node-API</h1>"); 
});





const server = app.listen(port, () => console.log('Server is up and running at port: ' + port));

