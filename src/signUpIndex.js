import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render((
    <div className="outerformblock w-form">
      <form id="email-form-2" name="email-form-2" data-name="Email Form 2" className="formblock">
        <div className="form_div2">
            <label htmlFor="name" className="formlabel">First name:</label>
            <label className="emptylabel"></label>
            <div id="input1">
                <input id="fname" type="text" className="normalinput w-input" maxlength="256" name="name" data-name="Name" placeholder=""/>
            </div>
        </div>
        <div className="form_div2">
            <label className="formlabel">Last Name:</label>
            <label className="emptylabel"></label>
            <div id="input2">
                <input id="lname" type="text" className="normalinput w-input" maxlength="256" name="field-4" data-name="Field 4" placeholder="Last name here..." required=""/>
            </div>
            
        </div>

        <div className="form_div2">
            <label htmlFor="username" className="formlabel">Desired Username:</label>
            <label className="emptylabel"></label>
            <div id="input2">
                <input id="uname" type="text" className="normalinput w-input" maxlength="256" name="username" data-name="Field 4" placeholder="Username here..." required=""/>
            </div>
            
        </div>

        

        <div className="form_div2">
            <label htmlFor="email" className="formlabel">Email Address:</label>
            <label htmlFor="name-2" className="emptylabel"></label>
            <div id="input3">
                <input id="email" type="email" className="normalinput w-input" maxlength="256" name="email" data-name="Email" placeholder="Email here..." required=""/>
            </div>
            
        </div>

        <div className="form_div2">
            <label htmlFor="password" className="formlabel">Password:</label>
            <label htmlFor="name-2" className="emptylabel"></label>
            <div id="input4">
                <input id="password" type="text" className="normalinput w-input" maxlength="256" name="password" data-name="Field 4" placeholder="Password..." required=""/>
            </div>
        </div>

        <div className="form_div2">
            <label className="formlabel">Date of birth: </label>
            <label className="emptylabel"></label>
            <div id="input4">
                <input id="DOB" type="text" className="normalinput w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="Date of Birth: MM/DD/YYYY" required=""/>
            </div>
            
        </div>
        <div className="form_div2">
            <label className="formlabel">Country of residence: </label>
            <label className="emptylabel"></label>
            <select id="COR" name="field-3" className="normalinput w-select">
                <option value="">Select one...</option><option value="First">First Choice</option>
                <option value="Second">Second Choice</option>
                <option value="Third">Third Choice</option>
            </select>
        </div>
        
        <div className="div-block-12"><input id="submitB" type="submit" value="Submit" data-wait="Please wait..." className="w-button"/></div>
      </form>
    </div>
), document.getElementById("reactContainerForm"));

let submitFormButton = document.getElementById("submitB");

async function handleClick(e) {

    if(validateForm()){

        let message = "Your submission has been recieved! Please check your email for a comfirmation message!";

        let firstName = document.getElementById("fname").value;
        let lastName = document.getElementById("lname").value;
        let email = document.getElementById("email").value;
        let desiredUsername = document.getElementById("uname").value;
        let dateOfBirth = document.getElementById("DOB").value;
        let countryOfResidence = document.getElementById("COR").value;
        let password = document.getElementById("password").value;

        let response = await fetch(`http://127.0.0.1:5000/api/signUp?fname=${firstName}&lname=${lastName}&password=${password}&email=${email}&uname=${desiredUsername}&dateOfBirth=${dateOfBirth}&countryOfResidence=${countryOfResidence}`
                        ,{
                            method: 'POST'
                        });
        
        if(response.status != 200)
        {
            message = "An internal error has occured and we are currently looking into a solution."
        }

        ReactDOM.render(
            <h1>{message}</h1>,
            document.getElementById("reactContainerForm"));
    }
} 

function createError(message, id){
    let error = document.createElement("h6");
    error.id = id;
    error.textContent = message;
    error.style.marginTop = "0";
    error.style.color = "red";
    error.style.fontSize = "0.75rem";

    return error;
}

//I will transfer this logic to react later...

function validateName(firstName, lastName)
{
    let pattern1 = /^(([A-Z][a-z]+)\-?)+$/, pattern2 = /^\s*$/;
    let form_div_fname = firstName.parentElement;
    let form_div_lname = lname.parentElement;
    let error;

    if(document.getElementById("errorFname") != undefined) form_div_fname.removeChild(document.getElementById("errorFname"));
    if(document.getElementById("errorLname") != undefined) form_div_lname.removeChild(document.getElementById("errorLname"));

    if (!firstName.value.match(pattern1))
    {
        let error;
        
        if(firstName.value.match(pattern2)) error = createError("This field can't be left empty!!!", "errorFname");
        else error = createError("Please no more and no less\nthan one word in this field!\nIf needed, place a hyphen in between names.", "errorFname");
        form_div_fname.appendChild(error);   
    }

    if (!lastName.value.match(pattern1))
    {
        let error;

        if(lastName.value.match(pattern2)) error = createError("This field can't be left empty!!!", "errorLname");
        else error = createError("Please no more and no less\nthan one word in this field!\nIf needed, place a hyphen in between names.", "errorLname");
        form_div_lname.appendChild(error);
    }

    if(document.getElementById("errorFname") || document.getElementById("errorLname")) return false;
    return true;
}

function validateEmail(email)
{
    let pattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, pattern2 = /^\s*$/;
    let form_div = email.parentElement;
    let error;

    if(document.getElementById("errorEmail") != undefined) form_div.removeChild(document.getElementById("errorEmail"));
    if(!email.value.match(pattern))
    {
        if(email.value.match(pattern2)) error = createError("This field can't be left empty", "errorEmail");
        else error = createError("This is not a valid email address", "errorEmail")
        form_div.appendChild(error);
        return false;
    }
    return true;
}

function isLeapYear(year)
{
    if(year % 4 == 0)
    {
        if(year % 100 == 0)
        {
            if(year % 400 == 0) 
                return true;
            return false;
        }
        return true;
    }
    return false;
}

function validateDOB(dateOfBirth)
{
    let month = parseInt(dateOfBirth.value.slice(0,2));
    let day = parseInt(dateOfBirth.value.slice(3,5));
    let year = parseInt(dateOfBirth.value.slice(6,8));

    let form_div = dateOfBirth.parentElement;
    let error;
        

    let pattern = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/, pattern2 = /^\s*$/;

    if(document.getElementById("errorDOB") != undefined) form_div.removeChild(document.getElementById("errorDOB"));
    if(!dateOfBirth.value.match(pattern))
    {
        if(!document.getElementById("errorDOB"))
        {
            if(dateOfBirth.value.match(pattern2)) error = createError("This field can't be left empty!!!", "errorDOB");
            else error = createError("Date format: MM/DD/YYYY", "errorDOB");
        }
        form_div.appendChild(error);
        return false;
    }

    else if(month == 2)
    {
        if(day == 29 && !isLeapYear(year)){  
            if(!document.getElementById("errorDOB"))
            {
                error = createError("The year that you entered is not a leap year!!!", "errorDOB");
                form_div.appendChild(error);
            }
            return false;
        }
        else if(day > 29)
        {
            if(!document.getElementById("errorDOB"))
            {
                error = createError("This is not a valid date.", "errorDOB");
                form_div.appendChild(error);
            }
            return false;
        }
    }
    else if( ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day > 31) ||
    ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30))
    {
        if(!document.getElementById("errorDOB"))
        {
            error = createError("This is not a valid date.", "errorDOB");
            form_div.appendChild(error);
            
        }
        return false;
    }
    return true;
}

function validateForm()
{
    let firstName = document.getElementById("fname");
    let lastName = document.getElementById("lname");
    let email = document.getElementById("email");
    let dateOfBirth = document.getElementById("DOB");

    let nameValidated = validateName(firstName, lastName);
    let emailValidated = validateEmail(email);
    let dobValidated = validateDOB(dateOfBirth);

    return nameValidated && emailValidated && dobValidated;
}
submitFormButton.addEventListener('click', handleClick); 


