import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  React.createElement("ul", null,
    React.createElement("li", { style: { color: "blue" } }, "Hola Chica Bofos🤪"),
    React.createElement("li", { style: { color: "green" } }, "Hola Chica Nofos🤪"),
    React.createElement("li", { style: { color: "red" } }, "Hola Chica Kofos🤪")),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
