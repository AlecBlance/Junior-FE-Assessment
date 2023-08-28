import { useEffect, useState } from "react";
import Notification from "./components/Notification";
import Form from "./components/Form";
import TaskHolder from "./components/Tasks/TaskHolder";
import taskService from "./services/task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [notif, setNotif] = useState("");

  useEffect(() => {
    const tasks = taskService.getParsedTasks();
    tasks ? setTasks(tasks) : localStorage.setItem("tasks", "[]");
  }, []);

  useEffect(() => {
    if (notif) {
      setTimeout(() => setNotif(""), 3000);
    }
  }, [notif]);

  return (
    <div className="relative bg-white px-8 py-5 rounded-2xl shadow-lg h-4/6 flex flex-col">
      <Notification notif={notif} />
      <h1 className="text-lg font-black text-blue-400 text-center mb-4">
        TO-DO
      </h1>
      <Form setTasks={setTasks} setNotif={setNotif} />
      <TaskHolder tasks={tasks} setTasks={setTasks} />
    </div>
  );
}
export default App;
