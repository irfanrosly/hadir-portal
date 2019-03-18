import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "../src/pages/Home";
import CreateStudent from "../src/pages/CreateStudent";
import GetStudent from "../src/pages/GetStudent";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/student/create" component={CreateStudent} />
            <Route path="/student/display" component={GetStudent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
