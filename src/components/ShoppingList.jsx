import React from "react";
import PropTypes from "prop-types";

const ShoppingList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
        ))}
      </ul>
    </div>
  );
};
ShoppingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ShoppingList;
