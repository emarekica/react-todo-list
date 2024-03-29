// outputs user data

import React from "react";

import classes from "./ItemList.module.scss";

// In the ul, go through a list of users that you get from AddUser and output an li
const ItemList = (props) => {
  return (
    <ul className={classes.list}>
      {props.itemsFromInput.map((item) => (
        <li className={classes.item} key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
