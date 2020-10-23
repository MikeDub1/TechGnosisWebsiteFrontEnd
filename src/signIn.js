import ErrorMessage from './ErrorSignIn.js'
import ReactDOM from 'react-dom'
import React from 'react'

let button = document.getElementById("submitSignIn");




button.addEventListener('click', async () =>{

    let username = document.getElementById("Username").value;
    let password = document.getElementById("Password").value;
    let response = await fetch(`http://127.0.0.1:5000/api/signIn?Username=${username}&Password=${password}`)
    .then(res => res.json())
    .then((response_object) => {
        console.log(response_object.status_code)
        if(response_object.status_code != 200)
        {
            ReactDOM.render(<ErrorMessage ref={(eMessage) => {window.eMessage = eMessage}}/>, document.getElementById("errorReact"));
            window.eMessage.handleErrorMessageChange(response_object);
        }

        else{
            console.log(response_object);
            window.localStorage.setItem("Username", username);
            window.localStorage.setItem("Password", password);
            window.location.href = "./projects.html"
        }  
    });
    

    
      

})