import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";

// A different component
function NextCompi() {
  {
    /* This is array destructering 
    useState returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount] = useState(). This is similar to this.state.count and this.setState in a class, except you get them in a pair.
    useEffect is to watch a change and it's second dependancy array is to only watch a current emotion.
    */
  }
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  const [data, setData] = useState(null);
  useEffect(() => {
    {
      console.log(`It's my current ${emotion} emotion`);
    }
  }, [emotion]);
  useEffect(() => {
    console.log(`It's my secondary ${secondary} emotion`);
  }, [secondary]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then(setData);
  });
  return (
    <>
      <h1>
        Kuch naya karte haen with {emotion} emotion aur dosra emotion{" "}
        {secondary}
      </h1>
      <button onClick={() => setEmotion("Super Happy")}>Happy🤪</button>
      <button onClick={() => setEmotion("Un Happy")}>Un Happy😭</button>
      <button onClick={() => setSecondary("Bhot ye jyda Happy")}>
        Bhot Happy🤪
      </button>
      <button onClick={() => setSecondary("Ultra Happy")}>Ultra Happy😭</button>
      <div>
        <h1>My Github user list</h1>
        {JSON.stringify(data)}
      </div>
    </>
  );
}
//If/else JSX ternary clause which returns either the App2 or NextCompi component based on authorized value from prop.
function App2({ authorized }) {
  return (
    <>{authorized ? <h1>This is my second App Bufkins</h1> : <NextCompi />}</>
  );
}
// Use <> short for <React.Fragment> for a component to return multiple elements.
ReactDOM.render(
  <>
    <App />
    <App2 authorized={false} />
  </>,
  document.getElementById("root")
);
// ReactDOM.render(
// <ul>
{
  /* <li style={{ color: "blue"}}>Hola Chica Bofos🤪</li> */
}
{
  /* <li style={{ color: "red"}}>Hola Chica Kofos🤪</li> */
}
{
  /* <li style={{ color: "green"}}>Hola Chica Jofos🤪</li> */
}
{
  /* </ul>, */
}
// document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
