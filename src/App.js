import React from 'react';
import logo from './assets/images/logo.svg';
//import './assets/css/App.css';
import ReactDOM from 'react-dom';
import Resources from './components/Resources';
//import Requests from './Request';
import { MiComponente, MiComponente2 } from './components/MiComponente';
import {BrowserRouter, Routes, Route, Switch} from 'react-router-dom'
import { Body } from './components/Body';
function App() {
  return (
    <React.Fragment> 
       <BrowserRouter>
          <Routes>
              <Route  path='/' exact element={<MiComponente/>}/>
              <Route  path='/request' exact element={<Body/>}/>
              <Route  path='/login' exact element={<MiComponente2/>}/>
          </Routes>
      </BrowserRouter>
      {/*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{backgroundColor:"Red", fontSize:'50px'}} > 
            Hola este mi primer sitio web.
          </p> HOLA 
          <Resources resul = 'TIPO SOLICITUD'/> 
          <a
            className="App-link"
            href="https://reactjs.org" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>*/}
    </React.Fragment>
    
  );
}

export default App;
