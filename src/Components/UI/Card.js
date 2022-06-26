import React from "react";

import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={`${classes.formContainer} ${classes.header} ${classes.p} ${classes.classFromOutside}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
