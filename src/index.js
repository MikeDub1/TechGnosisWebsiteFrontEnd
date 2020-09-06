import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

// let React = require('react');
// let ReactDOM = require('react-dom');
// let e = React.createElement;
let button = document.getElementById("join");
let button2 = document.getElementById("services");
let button3 = document.getElementById("contact-us");
let button4 = document.getElementById("forumsButton");
let button5 = document.getElementById("aboutUs");

button.addEventListener('click', () => {

    let myStyle = {    
        backgroundImage: 'url(contactus-techgnosis-webflow/images/portfolio-1---wide.svg)',
    }
    ReactDOM.render(<App h1="BlahBlahBlah" h2="BlahBlah" image = {myStyle} />, document.getElementById("reactcontainer"));
    
});

button2.addEventListener('click', () => {

    let myStyle = {    
        backgroundImage: 'url(contactus-techgnosis-webflow/images/portfolio-2---wide.svg)',
    }
    ReactDOM.render(<App h1="This is my 2nd button" h2="Service information goes here!" image = {myStyle} />, document.getElementById("reactcontainer"));
    
});

button3.addEventListener('click', () => {

    let myStyle = {    
        backgroundImage: 'url(contactus-techgnosis-webflow/images/portfolio-3---wide.svg)',
    }
    ReactDOM.render(<App h1="This is my 3rd button" h2="Contact us information goes here!" image = {myStyle} />, document.getElementById("reactcontainer"));
    
});

button4.addEventListener('click', () => {

    let myStyle = {    
        backgroundImage: 'url(contactus-techgnosis-webflow/images/portfolio-4---wide.svg)',
    }
    ReactDOM.render(<App h1="This is my 4th button" h2="forum information goes here!" image = {myStyle} />, document.getElementById("reactcontainer"));
    
});
button5.addEventListener('click', () => {

    let myStyle = {    
        backgroundImage: 'url(contactus-techgnosis-webflow/images/portfolio-4---wide.svg)',
    }
    ReactDOM.render(<App h1="This is my Fifth button" h2="forum information goes here!" image = {myStyle} />, document.getElementById("reactcontainer"));
    
});