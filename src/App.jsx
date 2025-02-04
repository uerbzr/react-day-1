import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FifthComponent from "./components/FifthComponent";
import AuthorList from "./components/AuthorList";

const authors = [
  { id: 1, name: "Chad" },
  { id: 2, name: "Anthony" },
  { id: 3, name: "Flea" },
  { id: 4, name: "John" },
];

function FirstComponent() {
  return (
    <>
      <div className="components">
        <h1>FirstComponent</h1>
        <ul>
          <li>First</li>
        </ul>
      </div>
    </>
  );
}
function SecondComponent() {
  const name = "nigel";
  return (
    <>
      <div className="components">
        <h1>Second Components</h1>
        <ul>
          <li>{name}</li>
        </ul>
      </div>
    </>
  );
}
function ThirdComponent(props) {
  return (
    <>
      <div className="components">
        <h1>Third Components</h1>
        <ul>
          <li>{props.name}</li>
        </ul>
      </div>
    </>
  );
}
function FourthComponent({ name, age }) {
  return (
    <>
      <div className="components">
        <h1>Fourth Components</h1>
        <ul>
          <li>{name}</li>
          <li>{age}</li>
        </ul>
      </div>
    </>
  );
}
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent name="bob" />
      <FourthComponent name="sue" age="23" />
      <FifthComponent />
      <AuthorList authors={authors} />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
