import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, Header, Icon, Modal} from 'semantic-ui-react';
import './App.css';
import Registration from './Registration';
import Login from './Login';


class App extends Component {
  render(){
  return (
    <div className="App">
      <Registration />
      <Login />
    </div>
  );
  }
}

export default App;

