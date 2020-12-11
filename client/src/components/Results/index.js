import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {

    state = {
        savedGame: [],
    }

    componentDidMount() {
        API.savedGame()
            .then(savedGame => this.setState({ savedGame: savedGame }))
            .catch(err => console.error(err));
    }

    handleSave = game => {

        if (this.state.savedGame.map(game => game._id).includes(game._id)) {
            API.deleteBook(game._id)
                .then(deletedGame => this.setState({ savedGame: this.state.savedGame.filter(game => game._id !== deletedGame._id) }))
                .catch(err => console.error(err));
        } else {
            API.savedGame(game)
                .then(savedGame => this.setState({ savedGame: this.state.savedGame.concat([savedGame]) }))
                .catch(err => console.error(err));
        }
    }

    render() {
        return (
            <div>
                {!this.props.game ? ( // might need to add this.props.game.length 
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                        <div>
                            {this.props.game.map(result => (
                                <div className="card mb-3" key={result._id}>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img alt={result.title} className="img-fluid" src={result.image} />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <h5 className="card-title">{result.title} by {result.authors}</h5>
                                                <p className="card-text">{result.description}</p>
                                                <div>
                                                    <a href={result.link} className="btn badge-pill btn-outline-dark mt-3" target="_blank" >View</a>
                                                    <button onClick={() => this.handleSave(result)} className="btn badge-pill btn-outline-warning mt-3 ml-3" >
                                                        {this.state.game.map(game => game._id).includes(result._id) ? "Unsave" : "Save"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default Results;
