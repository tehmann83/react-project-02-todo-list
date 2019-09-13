import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// test

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "wake up"
      },
      {
        id: 2,
        title: "drink water"
      }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };

  handleChange = e => {
    console.log("handleChange method working");
  };

  handleSubmit = e => {
    console.log("handleSubmit method working");
  };

  clearList = e => {
    console.log("clearList method working");
  };

  handleEdit = id => {
    console.log(`handleEdit ${id}`);
  };

  handleDelete = id => {
    console.log(`handleDelete ${id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.editItem}
            ></TodoInput>
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
