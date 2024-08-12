import { useState, useEffect } from "react";

import Footer from "./components/Footer";
import AddTask from "./components/AddTask";
import Task from "./components/Task";
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showAdd, setShowAdd] = useState(false);

  const changeOpenCard = () => {
    setShowAdd((showAdd) => !showAdd);
  };

  const getTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log("getTasks error", error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const addTask = async (newTask) => {
    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      const data = await response.json();
      setTasks((prevTasks) => [...prevTasks, data]);
    } catch (error) {
      console.log("addTask error", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      }
    } catch (error) {
      console.error(error, "error");
    }
  };

  return (
    <div className="container">
      <Header showAdd={showAdd} changeOpenCard={changeOpenCard} />
      {showAdd ? (
        <>
          <AddTask onAdd={addTask} />
          <Task task={tasks} onDelete={deleteTask} />
        </>
      ) : (
        ""
      )}
      <Footer showAdd={showAdd} />
    </div>
  );
}

export default App;
