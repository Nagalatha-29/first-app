import React from "react";

function ItemList({ items }) {

  return (
    <div>
      <h3>Available Fruits</h3>

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

    </div>
  );

}

export default ItemList;