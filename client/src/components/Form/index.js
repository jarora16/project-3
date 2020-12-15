import React from "react";


function Form(props){
  return (
    <div className="container">
    <form>
      <div className="form-group">
        <label htmlFor="search"><h2>Search for and Save Video Games of Interest</h2></label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search a Video Game"
          id="search"
        />
        <button onClick={props.handleGameSubmit} className="btn btn-dark mt-3 mb-5">
            Search for Game!
          </button>

          {/* <button onClick={props.handleReviewSubmit} className="btn btn-dark mt-3 mb-5">
          Search for Reviews!
          </button> */}

      </div>
    </form>
    </div>
  );
}

export default Form;
