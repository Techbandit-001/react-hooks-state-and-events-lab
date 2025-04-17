import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleClick() {
    setInCart((prev) => !prev);
  }

  const liClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add-to-cart" onClick={handleClick}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
