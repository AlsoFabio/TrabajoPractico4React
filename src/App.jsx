import "./App.css";
import { Routes,Route } from "react-router-dom";
import Nabvar from "./components/Nabvar";
import Rhodes from "./pages/Rhodes";
import Home from "./pages/Home";
import Fatego from "./pages/Fatego";

function App() {
  
  return (
    <>
      <Nabvar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Rhodes" element={<Rhodes/>} />
        <Route path="/Fate-go" element={<Fatego/>} />
      </Routes>
    </>
  );
}

export default App;
