import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onConfirm}>
      <div>
        <Card className={classes.modal}>
          <header className={classes.header}>
            <h2>{props.title}</h2>

            <div className={classes.content}>
              <p>{props.message}</p>
            </div>
          </header>
          <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>OK</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
