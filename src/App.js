import React from "react";

import AddItem from "./Components/Items/AddItem";
import "./App.css";

const App = () => {
  return (
    <div>
      <header className="header">My TO-DO list</header>
      <AddItem />
      {/* 
      <ItemList />
      */}
    </div>
  );
};

export default App;
