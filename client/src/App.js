import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import Detail from "./views/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/api/products" element={<Main />} />
        <Route path="/api/products/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}
export default App;
