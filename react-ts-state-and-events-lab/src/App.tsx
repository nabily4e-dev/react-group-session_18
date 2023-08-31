import { useState } from "react";
import itemData from "../src/data/items";
import ShoppingList from "./components/shopping-list";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [items, setItems] = useState(itemData);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
