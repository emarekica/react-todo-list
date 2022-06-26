import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddItem.module.css";

const AddItem = () => {
  const [newItem, setNewItem] = useState("");

  // function executed when form submitted
  // uses data collected in "input"
  // send via props "previousItemAdded" to the place (component) that handles it
  const formSubmitHandler = (newItemAdded) => {
    setNewItem((previousItemAdded) => {
      return [...previousItemAdded, newItem];
    });
  };

  // triggered on user input keystroke
  // handle data collected from input
  const addNewItemHandler = (e) => {
    // set to what user curently entered
    setNewItem(e.target.value);
  };

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={formSubmitHandler} className="formContainer">
          <p className="textElement">Add an item:</p>

          <div className="inputContainer">
            <input
              className="input"
              type="text"
              id="item"
              placeholder="Type your item here"
              value={newItem}
              onChange={addNewItemHandler}
            />
            <Button type="submit">Add</Button>
          </div>
          {/* temporary */}
          <ul>
            <li className="listItem">item 1</li>
            <li className="listItem">item 2</li>
            <li className="listItem">item 3</li>
            <li className="listItem">item 4</li>
          </ul>
        </form>
      </Card>
    </div>
  );
};

export default AddItem;
