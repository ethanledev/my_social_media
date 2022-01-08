import React from "react";
import Header from "./components/header/header.component";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home-page/homePage.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;