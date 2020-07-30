import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

class App extends Component {
  counter = 0;
  state = {
    
  };
  //method for tasks deletion
  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };
  //method for setting tasks done
  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.map((task) => {
      if (task.id === id) {
        task.active = false;
        task.endDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };
  addTask = (text, date) => {
    const task = {
      id: this.counter,
      text,
      date,
      active: true,
      endDate: null,
    };
    this.counter++;
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };
  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>
        <div className="header">
          <AddTask add={this.addTask} />
        </div>
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
