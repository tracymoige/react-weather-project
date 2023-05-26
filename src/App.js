import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Nairobi" />
        <p className="mt-3">
          This project was coded by Tracy Moige and is{" "}
          <a
            href="https://github.com/tracymoige/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://thunderous-cat-c4359e.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </p>
      </div>
    </div>
  );
}
