import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

let button = document.getElementById("join");

button.addEventListener('click', () => {
    ReactDOM.render(<App h1="Please join us" h2="please!!!" />);
});