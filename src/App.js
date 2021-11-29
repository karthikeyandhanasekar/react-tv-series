import { BrowserRouter } from "react-router-dom";
import MainComponents from "./components/MainComponents";
import './assets/css/index.css'

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <MainComponents />

      </div>
    </BrowserRouter>
  );
}

export default App;
