var axios = require("axios").default;

// API for video game reviews! 
var options = {
  method: 'GET',
  url: 'https://whatoplay.p.rapidapi.com/games/',
  params: {platform_url: 'undefined'},
  headers: {
    'x-rapidapi-key': 'b6be4d9121msh3f7dc068abfd0afp148b28jsn9b27b7f7878e',
    'x-rapidapi-host': 'whatoplay.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});