import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
// import { Container } from "@material-ui/core";
// import { ToastProvider } from "react-toast-notifications";
import Flights from './components/Flights';

function App() {
  return (
    <Provider store={store}>
      <Flights/>
    </Provider>
  );
}

export default App;
