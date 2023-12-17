import React from "react";
import { Route, Routes } from "react-router-dom";
import Gallery from "./Admin/Gallery";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
