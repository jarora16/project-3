import React from "react";

function GameListItem(props) {
    const { game, onSaveGame } = props;
    
    return (
        <div class="row p-2">
        <div class="col-md-4">
        
                <h5> {game.name}</h5>
        
        </div>
        <div class = "column"> <p></p></div>
        
        <div class="col-md-4"> 
            <p>Rating: {game.rating}</p>
        </div>
        
        <div class="col-md-4">
                <p>Released Date: {game.released}</p> 
                <button onClick={() => onSaveGame(game)}>Save This Game!</button>     
        </div>
        
        <div class="col-md-4">
                <img src={game.background_image} height={100} /> 
                <hr></hr>
        </div>
        </div>
    )  
}

export default GameListItem;
