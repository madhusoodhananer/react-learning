import React from "react";
import PropTypes from "prop-types";
const greetingText = () => {
  const date = new Date();
  const hours = date.getHours();
  if (hours < 12) {
    return "Good morning";
  } else if (hours < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};
const DynamicGreeting = ({ name }) => {
  return (
    <div>
      <h1>
        {greetingText()}, {name}
      </h1>
    </div>
  );
};

DynamicGreeting.propTypes = {
  name: PropTypes.string.isRequired,
};
export default DynamicGreeting;
