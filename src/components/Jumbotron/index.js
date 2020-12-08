import React from "react";
import "./style.css"


function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <h1><span><a className="white" id="jumboHead" href="/">My Video Game Inventory</a></span></h1>
        <div>
          <a className="white" target="_blank" rel="noopener noreferrer" href="http://developers.google.com/books/">
            Powered by whatoplay
          </a>
        </div>
      
    </div>
  );
}



export default Jumbotron;