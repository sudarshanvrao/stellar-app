import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";
import NasaEPIC from "./components/NasaEPIC";

function App() {
  return (
  <BrowserRouter>
  <div className="app">
    <Routes>
    <Route element={<Home/>} path="/" exact></Route>
    <Route element={<NasaPhoto/>} path="/nasaphoto"></Route>
    <Route element={<NasaEPIC/>} path="/epic"></Route>
    </Routes>
  </div>
  </BrowserRouter>
  );
}

export default App;
