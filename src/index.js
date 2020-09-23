import React from 'react';
import ReactDOM from 'react-dom';
import NavPrev from './NavPrev.js';

let button = document.getElementById("join");
let button2 = document.getElementById("services");
let button3 = document.getElementById("contact-us");
let button4 = document.getElementById("forumsButton");
let button5 = document.getElementById("aboutUs");


ReactDOM.render(<NavPrev ref = {(ourPreview) => {window.ourPreview = ourPreview}}/>, document.getElementById("reactcontainer"));


button.addEventListener('click', window.ourPreview.handleClick);
button2.addEventListener('click', window.ourPreview.handleClick);
button3.addEventListener('click', window.ourPreview.handleClick);
button4.addEventListener('click', window.ourPreview.handleClick);
button5.addEventListener('click', window.ourPreview.handleClick);
