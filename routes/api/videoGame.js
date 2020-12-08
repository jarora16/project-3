var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://rawg-video-games-database.p.rapidapi.com/games',
  headers: {
    'x-rapidapi-key': 'b6be4d9121msh3f7dc068abfd0afp148b28jsn9b27b7f7878e',
    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});