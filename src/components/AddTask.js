import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    date: this.minDate,
  };
  handleText = (e) => {
    this.setState({ text: e.target.value });
  };
  handleDate = (e) => {
    this.setState({ date: e.target.value });
  };

  handleClick = () => {
    const { text, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date);
      if (add) {
        this.setState({
          text: "",
          date: this.minDate,
        });
      }
    } else alert("zadanie ma za krótką nazwę");
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">
              Do kiedy zrobić?
            </span>
          </div>
          <input
            type="date"
            value={this.state.date}
            min={this.minDate}
            max={maxDate}
            onChange={this.handleDate}
            aria-label="Date"
            aria-describedby="basic-addon1"
          />
        </div>

        <div className="input-group mb-3">
          <input
            className="task-title form-control"
            type="text"
            placeholder="Nazwa zadania"
            value={this.state.text}
            onChange={this.handleText}
            aria-label="Task name"
            aria-describedby="basic-addon2"
          />
          <div class="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={this.handleClick}
            >
              dodaj
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default AddTask;
