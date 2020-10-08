import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import { Container } from "@material-ui/core";
import Flights from './components/Flights';
import SignIn from './components/loginForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Container maxWidth="lg"> 
      </Container>
      <Route exact component={Flights} path="/"/>
      <Route exact component={SignIn} path="/login"/>
      </Router>
    </Provider>
  );
}

export default App;
