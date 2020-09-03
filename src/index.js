import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

// let React = require('react');
// let ReactDOM = require('react-dom');
// let e = React.createElement;
let button = document.getElementById("join");


button.addEventListener('click', () => {

    let myStyle = {    
        backgroundImage: 'url(contactus-techgnosis-webflow/images/portfolio-1---wide.svg)',
    }
    ReactDOM.render(<App h1="BlahBlahBlah" h2="BlahBlah" image = {myStyle} />, document.getElementById("reactcontainer"));
    
});