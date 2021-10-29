import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/about"></Route>
                    <Route path="/users"></Route>
                    <Route path="/"></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
