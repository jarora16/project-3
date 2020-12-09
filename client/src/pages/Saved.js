import React, { Component } from "react";
import API from "../utils/API";
import Results from "../components/Results";

class Saved extends Component {
    state = {
        savedGame: [],
    }

    componentDidMount() {
        API.savedGame()
            .then(savedGame => this.setState({ savedGame: savedGame }))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div className="container">
                <h2>Saved Games</h2>
                <Results savedGame={this.state.savedGame} />
            </div>
        )
    }
}

export default Saved;