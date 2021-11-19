import { PlusLg } from "react-bootstrap-icons";
import style from "./ListInput.module.css";
import { useState } from "react";
const ListInput = ({ onAdd }) => {
  const [item, setItem] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const addItem = () => {
    onAdd(item);
    document.getElementById("name").value = null;
  };
  return (
    <div className={style.container}>
      <div className={style.inputContainer}>
        <PlusLg size={28} color="white" onClick={addItem}></PlusLg>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          placeholder="Add Item . . ."
        ></input>
      </div>
    </div>
  );
};

export default ListInput;
