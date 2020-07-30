import React from "react";

const Task = (props) => {
  const { date, text, id, active, endDate } = props.task;
  if (active) {
    return (
      <div className="task-obj">
        <div>
          <div className="task-header">{text}</div> do <span>{date}</span>{" "}
        </div>
        <div className="task-buttons">
          {" "}
          <button
            className="btn btn-primary done"
            onClick={() => props.change(id)}
          >
            zrobione!
          </button>
          <button className="btn btn-danger" onClick={() => props.delete(id)}>
            X
          </button>
        </div>
      </div>
    );
  } else {
    const convDate = new Date().toISOString().slice(0, 10);;
    return (
      <div className="task-obj">
        <div>
          {" "}
          <div className="task-header inactive-header">{text}</div>
          <p>Planowana data ukończenia: {date}</p>
         <p> Data wykonania: {convDate}</p>
        </div>
        <div className="task-buttons"> <button className="btn btn-danger" onClick={() => props.delete(id)}>
          X
        </button></div>
       
      </div>
    );
  }
};

export default Task;
