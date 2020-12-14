import axios from "axios";

//  var axios = require("axios").default;

var Game = {
  method: 'GET',
  url: 'https://rawg-video-games-database.p.rapidapi.com/games',
  headers: {
    'x-rapidapi-key': 'b6be4d9121msh3f7dc068abfd0afp148b28jsn9b27b7f7878e',
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
  },
}



var gamefunctions = {

  
  // Deletes the book with the given id
  getGame: function () {
    return axios.get("/api/games").then(Game => Game.data);
  },

  deleteGame: function (id) {
    return axios.delete("/api/games/" + id).then(Game => Game.data);
  },
  // Saves a book to the database
   saveGame: function (gameData) {
    return axios.post("/api/games", gameData).then(Game => Game.data);
  },
  // Get the saved a books from the database
  savedGame: function () {
    return axios.get("/api/games").then(Game => Game.data);
  },
  
};
 


console.log(Game);

export default gamefunctions;

