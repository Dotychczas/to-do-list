import React from "react";
import Task from "./Task";
const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);
  if (done.length > 1) {
    done.sort((a, b) => b.endDate - a.endDate);
  }
  if (active.length > 1) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const finishedTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="active">
        <h1>Zadania do Zrobienia</h1>
        {activeTasks.length > 0 ? activeTasks : <p>Brak zadań</p>}
      </div>
      <div className="inactive">
        <h3>Zrobione ({done.length})</h3>
        {done.length > 5 && <p className="last-tasks">Ostatnie 5 zadań</p>}

        {finishedTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
