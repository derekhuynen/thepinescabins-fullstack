import React from "react";
import './css/App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/Nav/Header.js'
import Home from './components/Home/Home.js'
import Footer from './components/Nav/Footer.js'
import Weather from './components/Weather/Weather.js'
import Cabins from './components/Cabin/Cabins.js'
import Restaurants from './components/Restaurant/Restaurants.js'
import Activities from './components/Activities/Activities.js'
import Contact from './components/Contact.js'
import OctoberFest from './components/Holiday/OctoberFestPage.js'
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
