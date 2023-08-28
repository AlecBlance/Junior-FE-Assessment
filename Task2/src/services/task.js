import { parse, v1 as uuid } from "uuid";

const getParsedTasks = () => {
  const tasks = localStorage.getItem("tasks");
  return JSON.parse(tasks);
};

const saveTasks = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const taskCreate = (task) => {
  let parsedTasks = getParsedTasks();
  const newTask = {
    task,
    id: uuid(),
    done: false,
  };

  parsedTasks = parsedTasks.concat(newTask);
  saveTasks(parsedTasks);
  return parsedTasks;
};

const taskDelete = (id) => {
  let parsedTasks = getParsedTasks();
  parsedTasks = parsedTasks.filter((task) => task.id !== id);
  saveTasks(parsedTasks);
};

const taskDone = (id) => {
  let parsedTasks = getParsedTasks();
  parsedTasks = parsedTasks.map((task) =>
    task.id === id ? { ...task, done: !task.done } : task
  );
  saveTasks(parsedTasks);
};

export default { taskCreate, taskDelete, taskDone, getParsedTasks };
