import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/Page";
import Post from "./components/Post";
import Header from "./components/Header";
import "./index.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;