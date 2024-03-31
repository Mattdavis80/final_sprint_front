import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EnterNumbers from "./pages/EnterNumbers";
import HomePage from "./pages/HomePage";
import ProcessNumbers from "./pages/ProcessNumbers";
import PreviousTrees from "./pages/PreviousTrees";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/enter-numbers" element={<EnterNumbers />} />
        <Route path="process-numbers" element={<ProcessNumbers />} />
        <Route path="previous-trees" element={<PreviousTrees />} />
      </Routes>
    </Router>
  );
}

export default App;
