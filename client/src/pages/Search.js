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
      

<<<<<<< HEAD
    makeBook = gameData => {
        return {
            _id: gameData.name,
            Name: gameData.rating,
            rating: gameData.released
            // authors: bookData.volumeInfo.authors,
            // description: bookData.volumeInfo.description,
            // image: bookData.volumeInfo.imageLinks.thumbnail,
            // link: bookData.volumeInfo.previewLink
        }
    }

=======
    // Has the search function working correctly
>>>>>>> master
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

<<<<<<< HEAD
    // {...state,currentMenu: action.menu.filter((menu) =>
    //     state.currentCategoryId == menu.category_id)}
=======
    // WORKING ON CURRENTLY

    // searchReview = async gameData => {
    //     let url = 'https://whatoplay.p.rapidapi.com/games/' ;
    //     var apiGame =
    //     {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-key": "fbc79b8878msh8445e3cc4e70eb7p11ff79jsncf79389df00f",
    //             "x-rapidapi-host": "whatoplay.p.rapidapi.com",
    //             "useQueryString": true
    //         }
    //     }
    //     const response = await fetch(url, apiGame);
    //     const data = await response.json();
    //     console.log("reviewdata: ", data);
    // };
>>>>>>> master

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        
        if (name === this.state.name)
        {
            return this.state.name;
        }
        // this.setState({
        //     [name]: value
        // });
    };

    handleGameSubmit = event => {
        event.preventDefault();
        this.searchGame(this.state.search);
    };

    handleReviewSubmit = event => {
        event.preventDefault();
        console.log("searching for the review: ");
        this.searchReview(this.state.search);
    };

    // var req = unirest("GET", "https://rawg-video-games-database.p.rapidapi.com/games/portal");


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
                    <div class="row">
                        <div class="col-md-4">
                            {this.state.game.map(item => (
                                <p>Game: {item.name}</p>
                                // <p>image: </p>, <img src= {item.background_image} height={100} /> // item is a place holder, it can be anything like "x"
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
                        {/* { <div class="col-md-3">
                            {this.state.game.map(item => (
                               <p>image: </p>, <img src= {item.background_image} height={100} />
                            ))} IMAGES FOR EACH GAME BUT NEED TO ALGIN WITH OTHER INFORMATION
                        </div> } */} 
                    </div>
                    {/* <Results games={this.state.games} /> */}
                </div>
            </div>
        )
    }
}

export default Search;
