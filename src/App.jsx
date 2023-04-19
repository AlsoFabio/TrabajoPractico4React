import "./App.css";
import { Routes,Route } from "react-router-dom";
import Nabvar from "./components/Nabvar";
import Rhodes from "./pages/Rhodes";
import Home from "./pages/Home";

function App() {
  
  return (
    <>
      <Nabvar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Rhodes" element={<Rhodes/>} />
      </Routes>
    </>
  );
}

export default App;
