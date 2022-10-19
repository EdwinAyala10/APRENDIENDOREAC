import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
//import { MiComponente, MiComponente2 } from './components/MiComponente';
function Body() {
  return (
    <React.Fragment>
        <h1>EDWIN body</h1>
		<Link to={'/login'} >Edwin</Link>

    </React.Fragment>
    
  );
}
export {Body};




