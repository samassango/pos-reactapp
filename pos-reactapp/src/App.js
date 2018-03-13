import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import { connect } from 'react-redux'
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      isAuthenticated:false,
      currentUser:null,
    }
  }
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
          <AppBar
              title="Welcome to Ordering system"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          <div className="App-intro">
          {this.state.isAuthenticated ?
             <Home currentUser={this.state.currentUser}/>:
            <Login />}
          </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
