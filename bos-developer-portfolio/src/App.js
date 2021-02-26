import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Profile from './components/Profile/Profile';




function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" exact component={Profile}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
