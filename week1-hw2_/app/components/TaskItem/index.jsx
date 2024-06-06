import React from "react";
import Image from "next/image";
import favicon from "../../favicon.ico";
const TaskItem = ({tasks, handleDeleteTask, handleCompleteTask}) => {

  return (
    <>
      <ul onClick={() => handleCompleteTask(tasks.id)}>
        <li className="flex justify-between items-center p-2 bg-gray-900 rounded mb-2">
          <div className="flex items-center">
            <button
              className="w-6 h-6 my-auto mr-6"
            >
              <Image src={favicon} alt="Task status" width={30} height={30} />
            </button>
            <span
              className={`ml-2 ${
                tasks.completed
                  ? "line-through text-gray-500"
                  : "text-white"
              }`}
            >
              {tasks.text}
            </span>
          </div>
          <button
            onClick={() => handleDeleteTask(tasks.id)}
            className="text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      </ul>
    </>
  );
};

export default TaskItem;
