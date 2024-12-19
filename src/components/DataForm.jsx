import React from "react";
import PropTypes from "prop-types";

const DataForm = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <br />
        <label>
          Photo:
          <input type="file" name="photo" />
        </label>
        <br />
        <br />
        <label>
          Bio:
          <textarea name="bio" />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
DataForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DataForm;
