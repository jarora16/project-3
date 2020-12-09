import React from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";

class Search extends React.Component {
    state = {
        value: "",
        games: []
    };

    // componentDidMount() {
    //     this.searchGame();
    // }

    makeBook = gameData => {
        return {
            _id: gameData.id,
            title: gameData.title
            // authors: bookData.volumeInfo.authors,
            // description: bookData.volumeInfo.description,
            // image: bookData.volumeInfo.imageLinks.thumbnail,
            // link: bookData.volumeInfo.previewLink
        }
    }

    searchGame = gameData => {
        API.GET(gameData)
            .then(res => this.setState({ games: res.data.items.map(gameData => this.makeGame(gameData)) }))
            .catch(err => console.error(err));
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

    render() {
        return (
            <div>
                <Form
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="container">
                    <h2>Results</h2>
                    <Results games={this.state.games} />
                </div>
            </div>
        )
    }
}

export default Search;
