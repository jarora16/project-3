import React from "react";
import Form from "../components/Form";
import GameListItem from "../components/Form/GameListItem";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        value: "",
        game: [],
        search : ""
    };

    


    async componentDidMount() {
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
        // this.setState({ game: data.results });
        console.log(this.state.game);
    };
      

    // Has the search function working correctly
    searchGame = async gameData => {
        let url = 'https://rawg-video-games-database.p.rapidapi.com/games?search=' + gameData;
        var apiGame =
        {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "b6be4d9121msh3f7dc068abfd0afp148b28jsn9b27b7f7878e",
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "useQueryString": true
            }
        }
        const response = await fetch(url, apiGame);
        const data = await response.json();
        console.log("handlesgamesubmit: ", data);
        this.setState({ game: data.results });
        
    };
    

    // {...state,currentMenu: action.menu.filter((menu) =>
    //     state.currentCategoryId == menu.category_id)}

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        
        // if (name === this.state.name)
        // {
        //     return this.state.name;
        // }
        this.setState({
            [name]: value
        });
    };

    handleGameSubmit = event => {
        event.preventDefault();
        this.searchGame(this.state.search);
    };

//    //handleReviewSubmit = event => {
//       event.preventDefault();
//         console.log("searching for the review: ");
//        this.searchReview(this.state.search);
//     };

    // var req = unirest("GET", "https://rawg-video-games-database.p.rapidapi.com/games/portal");

    handleSaveGame = (game) => {
        
        var gameData = {
            name: game.name,
            platforms: game.platforms,
            rating: game.rating,
            background_image: game.background_image,
            esrb_rating: game.esrb_rating ? game.esrb_rating.name :null
        };
        console.log("saving game", gameData);
        API.saveGame(gameData);
    }

    render() {
        return (
            <div>
                <Form
                    search= {this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleGameSubmit={this.handleGameSubmit}
                    handleReviewSubmit={this.handleReviewSubmit}
                    
                /> 
               
                <div className="container">
                    <h2>Results</h2>
                    <div className="container">
                        
                </div>
                    

                    {this.state.game.map((game) => (
                        game.name ? (
                            <GameListItem key={game.id} game={game} onSaveGame={this.handleSaveGame}/>
                        ): null 
                       

                          ))}
                        {/* { <div class="col-md-3">
                            {this.state.game.map(item => (
                               <p>image: </p>, <img src= {item.background_image} height={100} />
                            ))} IMAGES FOR EACH GAME BUT NEED TO ALGIN WITH OTHER INFORMATION
                        </div> } */} 
                    
                    {/* <Results games={this.state.games} /> */}
                </div>
            </div>
        )
    }
}

export default Search;
