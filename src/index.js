import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NameForm from './UncontrolledComp';
import Greeting from './ProptypesExample';
import DidMountApiCall from './DidMountApiCall';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Greeting />, document.getElementById('root'));
ReactDOM.render(<NameForm />, document.getElementById('root'));
// ReactDOM.render(<DidMountApiCall />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
