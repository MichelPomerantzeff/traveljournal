import React from "react";
import AddCard from "./components/AddCard";
import Journal from "./components/Journal";
import Topbar from "./components/Topbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <Router>

      <Topbar />

      <Routes>
        <Route path="/traveljournal" element={<AddCard />} />
      </Routes>

      <Routes>
        <Route path="/traveljournal/journal" element={<Journal />} />
      </Routes>

    </Router>
  )
}