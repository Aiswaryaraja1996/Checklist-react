import { BookmarkStarFill } from "react-bootstrap-icons";
import { BookmarkStar } from "react-bootstrap-icons";
import style from "./ListItem.module.css";
import { Trash } from "react-bootstrap-icons";

const ListItem = ({
  data,
  handleTaskComplete,
  handleStarred,
  handleDelete,
}) => {
  return (
    <div className={style.itemContainer}>
      <div>
        {data.status ? (
          <div>
            <input
              type="checkbox"
              id={data.name}
              name={data.name}
              value={data.name}
              onClick={() => handleTaskComplete(data.id)}
              checked
            />
            <label for={data.name} style={{ textDecoration: "line-through" }}>
              {data.name}
            </label>
          </div>
        ) : (
          <div>
            <input
              type="checkbox"
              id={data.name}
              name={data.name}
              value={data.name}
              onClick={() => handleTaskComplete(data.id)}
            />
            <label for={data.name}>{data.name}</label>
          </div>
        )}
      </div>

      <div>
        {!data.starred ? (
          <BookmarkStar
            color="white"
            size={20} 
            onClick={() => handleStarred(data.id)}
          ></BookmarkStar>
        ) : (
          <BookmarkStarFill
            fill="white"
            size={20}
            onClick={() => handleStarred(data.id)}
          ></BookmarkStarFill>
        )}

        <Trash color="white" size={20} style={{paddingLeft:"5px"}} onClick={() => handleDelete(data.id)} />
      </div>
    </div>
  );
};

export default ListItem;
