import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

import DisplayCabins from "./page/DisplayCabins";
import IcalTest from "./page/ICalTest";




function App() {


  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DisplayCabins />} />
                <Route path="/Ical" element={<IcalTest />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
