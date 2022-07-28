import React from "react";

import Button from "./Button";

import classes from "./ErrorModal.module.scss";

const ErrorModal = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.backdrop} onClick={props.onHandlingError} />
      <div className={classes.modal}>
        <p>{props.errorMessage}</p>
        <Button onClick={props.onHandlingError}>Got it!</Button>
      </div>
    </div>
  );
};

export default ErrorModal;
