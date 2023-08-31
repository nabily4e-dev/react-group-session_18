import React from "react";

interface ItemProps {
  id?: number;
  key?: number | string;
  name: string;
  category: string;
}

function Item({ name, category }: ItemProps) {
  const [inCart, setInCart] = React.useState(false);

  const toggleCart = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : " "}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={toggleCart}>
        {inCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
