import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Drawer";
import PersistentDrawer from "./Components/PersistentDrawer";
import Login from "./Components/Login";
import {Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Link to="login"> login </Link>
          <PersistentDrawer/>
      </div>
    );
  }
}

export default App;
