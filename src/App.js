import { useState } from "react";

import "./App.css";

const App = () => {
  const [newItem, setNewItem] = useState("");

  // send via props "previousItemAdded" to the place (component) that handles it
  const addNewItemHandler = (newItemAdded) => {
    setNewItem((previousItemAdded) => {
      return [...previousItemAdded, newItem];
    });
  };

  // triggered on user input keystroke
  // handle data collected from input
  const newItemValueHandler = (e) => {
    // set to what user curently entered
    setNewItem(e.target.value);
  };

  return (
    <div className="App">
      {/* 
      <AddItem />
      <ItemList />
      */}
      <header>My TO-DO list</header>
      <form onSubmit={addNewItemHandler}>
        <p>Add an item:</p>
        <br />
        <input
          type="text"
          placeholder="Type your item here"
          value={newItem}
          onChange={newItemValueHandler}
        />
        <button>Add</button>

        {/* temporary */}
        <ul>
          <li className="list-item">item 1</li>
          <li className="list-item">item 2</li>
          <li className="list-item">item 3</li>
          <li className="list-item">item 4</li>
        </ul>
      </form>
    </div>
  );
};

export default App;
