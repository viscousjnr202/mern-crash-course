import React from "react";
import "./Update.css";
import { IoIosClose } from "react-icons/io";
const Update = ({ editInput, handleOnchangeEdit, setCloseEditMenu, updateProduct}) => {
  return (
    <div className="update-container">
      <form>
        <h3>
          Update Product
          <IoIosClose
            className="close-icon"
            onClick={() => setCloseEditMenu(false)}
          />
        </h3>
        <input
          type="text"
          value={editInput.name}
          onChange={handleOnchangeEdit}
          name="name"
        />
        <input
          type="number"
          min="0"
          value={editInput.price}
          onChange={handleOnchangeEdit}
          name="price"
        />
        <input
          type="text"
          value={editInput.image}
          onChange={handleOnchangeEdit}
          name="image"
        />
        <div className="button">
          <button onClick={updateProduct}>Update</button>
          <button  onClick={() => setCloseEditMenu(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
