import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        value: "",
        game: []
    };

    


    async componentDidMount() {
        //console.log("poop");
        let url = 'https://rawg-video-games-database.p.rapidapi.com/games';
        var apiGame =
        {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "b6be4d9121msh3f7dc068abfd0afp148b28jsn9b27b7f7878e",
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
            }
        }
        const response = await fetch(url, apiGame);
        const data = await response.json();
        console.log(data);
        this.setState({ game: data.results });
        console.log(this.state.game);
    };
      

    makeBook = gameData => {
        return {
            _id: gameData.id,
            Name: gameData.name,
            rating: gameData.rating
            // authors: bookData.volumeInfo.authors,
            // description: bookData.volumeInfo.description,
            // image: bookData.volumeInfo.imageLinks.thumbnail,
            // link: bookData.volumeInfo.previewLink
        }
    }

    searchGame = async gameData => {
        let url = 'https://rawg-video-games-database.p.rapidapi.com/games/' + gameData;
        var apiGame =
        {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "b6be4d9121msh3f7dc068abfd0afp148b28jsn9b27b7f7878e",
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com"
            }
        }
        const response = await fetch(url, apiGame);
        const data = await response.json();
        console.log(data);
        // this.setState({ game: data.results[0] });

        // API.savedGame(gameData)
        //     .then(res => this.setState({ games: res.data.items.map(gameData => this.makeGame(gameData)) }))
        //     .catch(err => console.error(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchGame(this.state.search);
    };


    // var req = unirest("GET", "https://rawg-video-games-database.p.rapidapi.com/games/portal");


    render() {
        return (
            <div>
                <Form
                    search= {this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    
                /> 
               
                <div className="container">
                    <h2>Results</h2>
                    {/* <div class= "row">
                        <div class="column"> <p>Title</p></div>
                        <div class="column"> <p> Rating </p></div>
                        <div class="column"> <p> Description</p></div>
                    </div> */}
                    <div class="row">
                        <div class="col-md-4">
                            {this.state.game.map(item => (
                                <p>Game: {item.name}</p> // item is a place holder, it can be anything like "x"
                            ))}
                        </div>
                        <div class = "column"> <p></p></div>
                        <div class="col-md-4">
                            {this.state.game.map(item => (
                                <p>Rating: {item.rating}</p>
                            ))}
                        </div>
                        <div class="col-md-4">
                            {this.state.game.map(item => (
                                <p>Released Date: {item.released}</p>
                            ))}
                        </div>
                    </div>
                    {/* <Results games={this.state.games} /> */}
                </div>
            </div>
        )
    }
}

export default Search;
