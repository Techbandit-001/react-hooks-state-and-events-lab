import React, { useState } from "react";
import Item from "./Item";
import items from "../data/items"; // assuming you're importing your items array here

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={handleChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

function Filter({ selectedCategory, onCategoryChange }) {
  return (
    <div className="Filter">
      <select
        name="filter"
        value={selectedCategory}
        onChange={onCategoryChange}
      >
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default ShoppingList;
