import React, { useState } from "react";
import { getNewRandomSpicyFood, spicyFoods } from "../data";

const SpicyFoodList: React.FC = () => {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState<string>("All");

  const handleAddFood = () => {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  };

  const handleLiClick = (id: number) => {
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBy(event.target.value);
  };

  const filteredFoods =
    filterBy === "All"
      ? foods
      : foods.filter((food) => food.cuisine === filterBy);

  const foodList = filteredFoods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <h2>Spicy Food List</h2>
      <button onClick={handleAddFood}>Add New Spicy Food</button>
      <select name="filter" value={filterBy} onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
};

export default SpicyFoodList;
