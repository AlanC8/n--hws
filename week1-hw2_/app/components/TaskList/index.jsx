import React from "react";
import TaskItem from "../TaskItem";

const TaskList = (props) => {
  // Render TaskItems using TaskItem component
  // Filter tasks by status here

  return (
    <>
      {props.tasks.map((task) => (
        <TaskItem key={task.id} handleCompleteTask={props.handleCompleteTask} handleDeleteTask={props.handleDeleteTask} tasks={task} />
      ))}
    </>
  );
};

export default TaskList;
