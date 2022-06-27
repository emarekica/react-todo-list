import React from "react";

import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onclick={props.onHandlingError} />
      <div className={classes.modalContainer}>
        <p>{props.errorMessage}</p>
        <Button onclick={props.onHandlingError}>Got it!</Button>
      </div>
    </div>
  );
};

export default ErrorModal;

// Think harder, get your pencil and write something! You can do it!
