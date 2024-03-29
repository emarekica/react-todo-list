import React, { useState } from "react";

import AddItem from "./Components/Items/AddItem";
import Card from "./Components/UI/Card";
import ItemList from "./Components/Items/ItemList";

import NewListButton from "./Components/UI/NewListButton";

import "./App.scss";

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

  const clearAllInputs = (e) => {
    setListItem([]);
  };

  return (
    <div>
      <NewListButton onButtonClick={clearAllInputs} />

      <header className="header">My TO-DO list</header>

      <div>
        <Card>
          <AddItem onAddingNewItem={addNewItemHandler} />
          <ItemList itemsFromInput={listItem} />
        </Card>
      </div>
    </div>
  );
};

export default App;
