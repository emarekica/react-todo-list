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
