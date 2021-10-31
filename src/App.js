import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/about"></Route>
                    <Route path="/users"></Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
