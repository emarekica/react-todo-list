import { useState } from "react";

import Card from "./Components/UI/Card";
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
      <header class="header">My TO-DO list</header>
      <div>
        <Card>
          <div class="formContainer">
            <form onSubmit={addNewItemHandler}>
              <p class="textElement">Add an item:</p>

              <div class="inputContainer">
                <input
                  class="input"
                  type="text"
                  placeholder="Type your item here"
                  value={newItem}
                  onChange={newItemValueHandler}
                />
                <button class="button">Add</button>
              </div>
              {/* temporary */}
              <ul>
                <li className="listItem">item 1</li>
                <li className="listItem">item 2</li>
                <li className="listItem">item 3</li>
                <li className="listItem">item 4</li>
              </ul>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default App;
