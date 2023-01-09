import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const handleDelete = (id) => {
    const allTasks = [...items];
    allTasks.splice(id, 1);
    setItems(allTasks);
    showAlert(true, "danger", "delete done");
  };
  const handleEdit = (item, id) => {
    setTask(item);

    setIsEdit(true);
    setEditId(id);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      showAlert(true, "danger", "please enter value");
      return;
    }
    const allTasks = [...items];
    if (isEdit) {
      allTasks[editId] = task;
      setItems(allTasks);
      setEditId("");
      setIsEdit(false);
      setTask("");
      showAlert(true, "success", "update done");
      return;
    }
    setItems([...items, task]);
    showAlert(true, "success", "create done");
    setTask("");
  };
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}></Alert>}
        <h3>Todo List</h3>

        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="Task1"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="submit-btn">submit</button>
        </div>
      </form>
      {items.length > 0 && (
        <div className="grocery-container">
          <div className="grocery-list">
            {items.map((item, index) => {
              return (
                <List
                  item={item}
                  id={index}
                  key={index}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                ></List>
              );
            })}
          </div>
          <button
            className="clear-btn"
            onClick={() => {
              setItems("");
              showAlert(true, "danger", "delete all");
            }}
          >
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
