/*component imports */
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import { createBrowserHistory } from "history";
import './index.css';




/*css imports */
//import 'bootstrap/dist/css/bootstrap.min.css';

//constantes historico
const customHistory = createBrowserHistory();





ReactDOM.render(<Routes history={customHistory}/>, document.getElementById('main'));



