import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete }) => {
  return (
    <>
      {task.map(({ id, operation, date, reminder }) => (
        <div className={`task ${reminder ? "reminder" : ""}`} key={id}>
          <h3>
            {operation}
            <FaTimes
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => onDelete(id)}
            />
          </h3>
          <p>{date}</p>
        </div>
      ))}
    </>
  );
};

export default Task;
