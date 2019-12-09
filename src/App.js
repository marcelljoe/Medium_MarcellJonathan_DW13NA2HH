import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Container, Button, Header, Icon, Modal} from 'semantic-ui-react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Registration from './Registration';
import Home from './Home';
import Login from './Login';

ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path ="/" component={Registration} />
        <Route path ="/Login" component={Login} />
        <Route path ="/Registration" component={Registration} />
      </Switch>
    </Router>,
    document.getElementById("root"));

export default class App extends Component {
  render(){
  return (
    <Container>
      <Home />
    </Container>
      
  );
  }
}