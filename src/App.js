import { useState } from "react";

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
      <form onSubmit={addNewItemHandler}>
        Add an item
        <br />
        <input
          type="text"
          placeholder="Type your item here"
          value={newItem}
          onChange={newItemValueHandler}
        />
      </form>
    </div>
  );
};

export default App;
