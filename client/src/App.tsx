import React from 'react';
import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import NavBar from "./components/Nav/NavBar";

function App() {
  return (

    <div className="App">
        <BrowserRouter>
            <NavBar/>
            <Routes>

                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
