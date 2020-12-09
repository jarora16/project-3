import axios from "axios";

//  var axios = require("axios").default;

var Game = {
  method: 'GET',
  url: 'https://rawg-video-games-database.p.rapidapi.com/games',
  headers: {
    'x-rapidapi-key': 'b6be4d9121msh3f7dc068abfd0afp148b28jsn9b27b7f7878e',
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
  },


  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // }),

  // Deletes the book with the given id
  deleteGame: function (id) {
    return axios.delete("/api/games/" + id).then(result => result.data);
  },
  // Saves a book to the database
  saveGame: function (gameData) {
    return axios.post("/api/games", gameData).then(result => result.data);
  },
  // Get the saved a books from the database
  savedGame: function () {
    return axios.get("/api/games").then(result => result.data);
  },
  
};

console.log(Game);

export default Game;