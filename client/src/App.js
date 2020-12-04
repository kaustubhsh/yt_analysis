import React , {Component} from 'react';
import './App.css';
import Dashboard from './Dashboard';
import Youtube from './youtube';
import Twitter from './twitter';
import { BrowserRouter, Switch, Route } from "react-router-dom"; 
// const csv = require('csvtojson');

// const fs = require('fs');

  
class App extends Component {

  render() {
    return (
      <BrowserRouter>
    <div className="App">
    <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route
              exact
              path="/twitter"
              component={Twitter}
            />
            <Route
              exact
              path="/youtube"
              component={Youtube}
            />
            </Switch>
        </div>
      </BrowserRouter>
  );
}
}

export default App;
