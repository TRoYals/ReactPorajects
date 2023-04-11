import "./App.css";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import { data } from "./data";

function App() {
  return (
    <div className="App">
      {<Hero />}

      <Projects title="basic projects" projects={data.basic} />
    </div>
  );
}

export default App;
