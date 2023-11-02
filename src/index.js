import React from "react";
import ReactDOM from "react-dom";

const name = "Rithwick Krishna";
const date = new Date();

const num = 7;
const resultDate = new Date();

ReactDOM.render(
  <div>
    <p>Created by {name}</p>
    <p>Copyright {date.getFullYear()}</p>
  </div>,
  document.getElementById("root")
);
