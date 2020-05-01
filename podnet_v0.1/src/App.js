import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import Login from './login'
import SignUp from './signUp';

class App extends Component {
  render() {
    return ( 
      <Router>
        <div className="App">
            <Switch> 
              <Route exact path='/' component={Login}></Route> 
              <Route exact path='/signUp' component={SignUp}></Route>
            </Switch> 
          </div>
      </Router>
    );
  }
}

export default App;
