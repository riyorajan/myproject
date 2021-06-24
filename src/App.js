
import React from 'react';

import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Switch, Route} from "react-router-dom";
import SignUp from './components/pages/Sign Up';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ Contact Us';
import Home from './components/pages/Home';

function App() {
    return (
    <Router>
        <Navbar />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/products" exact component={Products} />
            <Route path="/contact-us" exact component={ContactUs} />
            <Route path="/sign-up" exact component={SignUp} />
            <Route path="/marketing" exact component={Marketing} />
            <Route path="/consulting" exact component={Consulting} />
        </Switch>
 </Router>
        
    );
}

export default App;
