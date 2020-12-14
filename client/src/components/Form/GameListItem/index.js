import React from "react";

function GameListItem(props) {
    const { game } = props;
    return (
        <div class="row">
        <div class="col-md-4">
        
                <p> {game.name}</p>
                {/* // <p>image: </p>, <img src= {item.background_image} height={100} /> // item is a place holder, it can be anything like "x" */}
        
        </div>
        <div class = "column"> <p></p></div>
        <div class="col-md-4">
            
                <p>Rating: {game.rating}</p>
        
        </div>
        <div class="col-md-4">
                <p>Released Date: {game.released}</p>
        
        </div>
        </div>
    )  
}

export default GameListItem;
