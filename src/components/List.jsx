import ListInput from "./ListInput";
import { useState } from "react";
import ListItem from "./ListItem";
import style from "./List.module.css";

const List = () => {
  const [grocery, setGrocery] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const handleAdd = ({ name }) => {
    const payLoad = {
      name: name,
      status: false,
      starred: false,
      id: grocery.length + 1,
    };

    setGrocery([...grocery, payLoad]);
  };
  const handleTaskComplete = (id) => {
    setGrocery(
      grocery.map((i) => (i.id === id ? { ...i, status: !i.status } : i))
    );
  };

  const handleStarred = (id) => {
    setGrocery(
      grocery.map((i) => (i.id === id ? { ...i, starred: !i.starred } : i))
    );
  };

  const handleDelete = (id) => {
    setGrocery(grocery.filter((item) => item.id !== id));
  };
  return (
    <div className={style.mainContainer}>
      <div>
        <ListInput onAdd={handleAdd}></ListInput>
      </div>

      <div className={style.itemList}>
        {grocery
          .filter((j) => !j.status)
          .map((i) => {
            return (
              <ListItem
                key={i.id}
                data={i}
                handleTaskComplete={handleTaskComplete}
                handleStarred={handleStarred}
                handleDelete={handleDelete}
              ></ListItem>
            );
          })}
      </div>

      <div className={style.buttons}>
        {grocery.length !== 0 && (
          <button onClick={() => setShowCompleted(!showCompleted)}>
            {!showCompleted ? "Show Completed" : "Hide Completed"}
          </button>
        )}
      </div>

      <div className={style.itemList}>
        {showCompleted &&
          grocery
            .filter((j) => j.status)
            .map((i) => {
              return (
                <ListItem
                  key={i.id}
                  data={i}
                  handleTaskComplete={handleTaskComplete}
                  handleStarred={handleStarred}
                  handleDelete={handleDelete}
                ></ListItem>
              );
            })}
      </div>
    </div>
  );
};

export default List;
