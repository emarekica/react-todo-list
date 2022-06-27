import React, { useState } from "react";

import AddItem from "./Components/Items/AddItem";

import ItemList from "./Components/Items/ItemList";
import "./App.css";

const App = (props) => {
  const [listItem, setListItem] = useState([]);

  const addNewItemHandler = (newlyAddedItem) => {
    setListItem((previouslyAddedItemStateSnapshot) => {
      return [
        ...previouslyAddedItemStateSnapshot,
        {
          name: newlyAddedItem,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <header className="header">My TO-DO list</header>

      <AddItem onAddingNewItem={addNewItemHandler} />
      <ItemList itemsFromInput={listItem} />
    </div>
  );
};

export default App;
