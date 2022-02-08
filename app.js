// Importing express module
const express = require('express');
let data = require("./data");

const port = 3000;

// initializing express
const app = express();

// json parser
app.use(express.json());
//app.use('/', (req, res) => res.send('Hello World SGWebFreelancer'));

// home route
app.get("/", (req, res) =>
{ 
    res.send("<h1>Welcome to Novice Movie-API</h1>"); 
});

// GET /movies - Get all movies
app.get("/movies", (req, res) => {
  res.json(data);
})

// GET /movies/:id - one movie identified by id
app.get("/movies/:id", (req,res) => {
  const movieId = req.params.id;
  const movie = data.find(_movie => _movie.id === movieId);

  if(movie){
    res.json(movie)
  }else{
    res.json({message: `movie ${movieId} does not exist`})
  }
})

// POST /movies - create or add a movie
app.post("/movies", (req, res) => {
  const movie = req.body;
  console.log("Adding new movie: ", movie);

  // add new movie to Array
  data.push(movie)

  // return update
  res.json(data);
})



const server = app.listen(port, () => console.log('Server is up and running at port: ' + port));

