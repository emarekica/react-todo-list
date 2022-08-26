import React from "react";
import PenImg from "../../assets/pen8.png";

import classes from "./NewListButton.module.css";

const NewListButton = (props) => {
  const resetFunction = (e) => {
    console.log("Clicked!");
    // pass the onButtonClick={clearAllInputs} via props from the parent
    props.onButtonClick(e.target.value);
  };

  return (
    <button className={classes.newListButton} type="button">
      <img
        src={PenImg}
        alt="Drawing of a pen"
        className={classes.newListPen}
        // event listener
        onClick={resetFunction}
      />
    </button>
  );
};

export default NewListButton;

// CLEARING INPUTS
// use sate to store entered values

// pass the event listener from APP.JS where the Button is used

// const clearAllInputs = (e) => {
//   setListItem("");
// };

// <NewListButton onButtonClick={clearAllInputs} />

// https://reactjs.org/docs/handling-events.html

/* 

// event listener
myfunction() {
        console.log("CLICKED");
  }

<button>
  <img
    src="./img/google.png"
    alt="my image"
    onClick={this.myfunction}  // event listener
  />
</button>



If you click your image you will see CLICKED appearing in the console.

If you add the onClick listener to your image it will work. Then you can wrap that image in a button and even add some CSS class to it to match your needs.

*/
