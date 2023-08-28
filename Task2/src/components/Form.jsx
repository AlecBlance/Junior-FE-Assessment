import { useState } from "react";
import taskService from "../services/task";

const Form = ({ setTasks, setNotif }) => {
  const [task, setTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!task) return setNotif("Please add a task");
    setTasks(taskService.taskCreate(task));
    setTask("");
  };

  return (
    <form onSubmit={submitHandler} className="flex mb-4">
      <input
        type="text"
        name="task"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        placeholder="Write your task here"
        className="text-sm focus:outline-none grow border border-blue-400 rounded-3xl px-4 py-1 placeholder:text-sm"
      />
      <button className="border border-blue-400 rounded-3xl px-4 py-1 text-blue-400 hover:text-white hover:bg-blue-400 ml-4 text-sm">
        Add
      </button>
    </form>
  );
};
export default Form;
