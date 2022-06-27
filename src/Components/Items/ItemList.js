// outputs user data

import React from "react";

import classes from "./ItemList.module.css";

// In the ul, go through a list of users that you get from AddUser and output an li
const ItemList = (props) => {
  return (
    <ul>
      {props.itemsFromInput.map((item) => (
        <li key={item.id} className={classes.listItem}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
