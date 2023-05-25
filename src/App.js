import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p className="mt-3">
          This project was coded by Tracy Moige and is{" "}
          <a href="https://github.com/tracymoige/react-weather-project">
            open sourced on Github
          </a>
        </p>
      </div>
    </div>
  );
}
