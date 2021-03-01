import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Super from './components/Super';




function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/" component={Super}/>
      <Route path="/:id" component={Super}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
