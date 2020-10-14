import ErrorMessage from './ErrorSignIn.js'
import ReactDOM from 'react-dom'
import React from 'react'

let button = document.getElementById("submitSignIn");




button.addEventListener('click', async () =>{

    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    let response = await fetch(`http://127.0.0.1:5000/signIn?Username=${username}&Password=${password}`) //Learn Flask boi...
    
    if(response.status != 200)
    {
        ReactDOM.render(<ErrorMessage ref={(eMessage) => {window.eMessage = eMessage}}/>, document.getElementById("errorReact"));
        window.eMessage.handleErrorMessageChange(response.status);
        
    }

    else{
        console.log(response);
        window.localStorage.clear();
        window.localStorage.setItem("Username", username);
        window.location.href = "./projects.html"
    }    

})