import React from 'react';
import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayCabins from "./page/DisplayCabins";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DisplayCabins />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
