import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ item, id, handleEdit, handleDelete }) => {
  return (
    <article className="grocery-item">
      <p className="title">{item}</p>
      <div className="btn-container">
        <button
          className="edit-btn"
          type="button"
          onClick={() => handleEdit(item, id)}
        >
          <FaEdit></FaEdit>
        </button>
        <button
          className="delete-btn"
          type="button"
          onClick={() => handleDelete(id)}
        >
          <FaTrash></FaTrash>
        </button>
      </div>
    </article>
  );
};

export default List;
