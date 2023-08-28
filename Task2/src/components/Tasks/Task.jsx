import { useState } from "react";
import taskService from "../../services/task";

const Task = ({ deleteTask, taskData: { task, id, done } }) => {
  const [isDone, setIsDone] = useState(done);

  const handleCheck = () => {
    setIsDone(!isDone);
    taskService.taskDone(id);
  };

  const handleDelete = () => {
    taskService.taskDelete(id);
    deleteTask(id);
  };

  return (
    <div className="flex items-center mb-2">
      <label className={`${isDone ? "line-through text-slate-400" : ""}`}>
        <input
          type="checkbox"
          className="rounded-full focus:ring-transparent mr-2"
          name={id}
          id={id}
          checked={isDone}
          onChange={handleCheck}
        />
        {task}
      </label>
      <button className="inline-block ml-auto" onClick={handleDelete}>
        <svg
          className="w-4 h-4 "
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M12 24C5.38293 24 0 18.6171 0 12C0 5.38293 5.38293 0 12 0C18.6171 0 24 5.38293 24 12C24 18.6171 18.6171 24 12 24ZM12 1.5C6.21002 1.5 1.5 6.21002 1.5 12C1.5 17.79 6.21002 22.5 12 22.5C17.79 22.5 22.5 17.79 22.5 12C22.5 6.21002 17.79 1.5 12 1.5Z"
              fill="#F96666"
            />
            <path
              d="M8.28815 16.4619C8.09607 16.4619 7.90399 16.389 7.75806 16.242C7.46509 15.949 7.46509 15.4741 7.75806 15.1811L15.183 7.75598C15.4761 7.46301 15.9511 7.46301 16.2441 7.75598C16.537 8.04895 16.537 8.52393 16.2441 8.81708L8.81897 16.242C8.67102 16.389 8.47913 16.4619 8.28815 16.4619Z"
              fill="#F96666"
            />
            <path
              d="M15.7119 16.4619C15.52 16.4619 15.328 16.3891 15.182 16.242L7.7571 8.81801C7.46394 8.52504 7.46394 8.05006 7.7571 7.7571C8.05006 7.46394 8.52504 7.46394 8.81801 7.7571L16.2429 15.182C16.5361 15.475 16.5361 15.95 16.2429 16.2429C16.0961 16.3891 15.904 16.4619 15.7119 16.4619Z"
              fill="#F96666"
            />
          </g>
          <defs>
            <clipPath id="clip0_36_27">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
};
export default Task;
