import React from "react";
import './css/App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Nav/Header'
import Home from './components/Home/Home'
import Footer from './components/Nav/Footer'
import Weather from './components/Weather/Weather'
import Cabins from './components/Cabin/Cabins'
import Restaurants from './components/Restaurant/Restaurants'
import Activities from './components/Activities/Activities'
import Contact from './components/Contact'
import OctoberFest from './components/Holiday/OctoberFestPage'
import Cabin from "./components/Cabin/Cabin.js";

function App() {
    return (
        <div className="app">
            <Router>
                <Header/>

                <Switch>
                    <Route path="/restaurants" component={Restaurants}/>

                    <Route path="/activities" component={Activities}/>

                    <Route path="/cabins" component={Cabins}/>

                    <Route path="/weather" component={Weather}/>

                    <Route path="/contact" component={Contact}/>

                    <Route path="/holiday" component={OctoberFest}/>


                    <Route path="/cabin/:id" component={Cabin}/>

                    <Route path="/" component={Home}/>

                </Switch>

                <Footer/>
            </ Router>
        </div>
    );
}

export default App;
