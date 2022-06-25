import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${classes.formContainer} ${classes.header} ${classes.textElement} ${classes.classFromOutside}`}
    >
      {props.children}
    </div>
  );
};

export default Card;

// if header and p don't work, try leaving it in app.css or include it in AddItem.js

/* 

function Card(props) {
  return (
    <div className={`${classes.card} ${props.classFromOutside}`}>
      {props.children}
    </div>
  );
}

*/
