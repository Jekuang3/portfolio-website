import "./style/App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./components/Home";

function App() {
  useEffect(() => {
    document.title = "jessica kuang";
  }, []);

  return (
    <div>
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
