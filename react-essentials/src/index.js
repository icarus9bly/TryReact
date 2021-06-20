import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App.js"
import reportWebVitals from './reportWebVitals';

function NextCompi(){
  return <h1>Kuch naya karte haen</h1>
}
function App2(){
  return (
    <>
  <h1>This is my second App Bufkins</h1>
    <NextCompi />
    </>
    )
}
ReactDOM.render(
  <>
    <App />
    <App2 authorized={false}/>
  </>
  ,
  document.getElementById('root')
);
// ReactDOM.render(
  // <ul>
  {/* <li style={{ color: "blue"}}>Hola Chica Bofos🤪</li> */}
  {/* <li style={{ color: "red"}}>Hola Chica Kofos🤪</li> */}
  {/* <li style={{ color: "green"}}>Hola Chica Jofos🤪</li> */}
  {/* </ul>, */}
  // document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
