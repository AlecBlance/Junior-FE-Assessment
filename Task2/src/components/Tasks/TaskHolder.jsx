import Task from "./Task";

const TaskHolder = ({ tasks, setTasks, filter }) => {
  if (typeof filter === "boolean")
    tasks = tasks.filter((task) => task.done === filter);

  const handleDelete = (id) => {
    tasks = tasks.filter((task) => task.id !== id);
    setTasks(tasks);
  };

  return (
    <div className="grow min-h-0 overflow-y-auto overflow-x-hidden">
      {tasks.map((task) => (
        <Task taskData={task} key={task.id} deleteTask={handleDelete} />
      ))}
    </div>
  );
};
export default TaskHolder;
