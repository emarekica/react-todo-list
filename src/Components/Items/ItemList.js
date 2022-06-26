// outputs user data

import React from "react";

import classes from "./ItemList.modul.css";

// In the ul, go through a list of users that you get from AddUser and output an li
const ItemList = (props) => {
  return (
    <ul className={classes.listItem}>
      {props.itemsFromInput.map((item) => (
        // subject to change
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
