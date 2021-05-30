//import React from 'react';          <h1>Frontend My Activies Space </h1>
//import {Teste} from './pages/teste'
//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import GlobalStyle from './styles/global';
import Routes from './routes';


function App() {
  return (
    <Router>
        <Routes />
        <GlobalStyle />
    </Router>
  );

}

  export default App;
