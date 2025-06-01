import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <div className="page-wrapper">
      <ProgressBar progress={20} />
    </div>
  );
}

export default App;