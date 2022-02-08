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
  const movie = data.find(aMovie => aMovie.id === movieId);

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


// PUT /movies/:id - update movie
app.put("/movies/:id", (req,res) => {
  const movieId = req.params.id;
  const movie = req.body;
  console.log("Editing movie: ", movieId, " to be ", movie);

  const updatedMovieList = [];
  // loop through list to find & replace a movie
  data.forEach(oldMovie => {
    if(oldMovie.id === movieId){
      updatedMovieList.push(movie);
    }else{
      updatedMovieList.push(oldMovie);
    }
  });

  // replace old list to new list
  data = updatedMovieList;

  // return updated data
  res.json(data);

});


// DELETE /movies/:id - delete movie
app.delete("/movies/:id", (req,res) => {
  const movieId = req.params.id;

  console.log("Delete movie with id: ", movieId);

  // Using filter function to exclude movie to delete
  const filteredMovie = data.filter(movie => movie.id !== movieId);

  // replace old movie with new one
  data = filteredMovie;

  res.json(data);


});







const server = app.listen(port, () => console.log('Server is up and running at port: ' + port));

