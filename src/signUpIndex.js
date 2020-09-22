import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render((
    <div className="outerformblock w-form">
      <form id="email-form-2" name="email-form-2" data-name="Email Form 2" className="formblock">
        <div className="form_div2">
            <label htmlFor="name" className="formlabel">First name:</label>
            <label className="emptylabel"></label>
            <input id="fname" type="text" className="normalinput w-input" maxlength="256" name="name" data-name="Name" placeholder=""/>
        </div>
        <div className="form_div2">
            <label className="formlabel">Last Name:</label>
            <label className="emptylabel"></label>
            <input id="lname" type="text" className="normalinput w-input" maxlength="256" name="field-4" data-name="Field 4" placeholder="Example Text" required=""/>
        </div>
        <div className="form_div2">
            <label htmlFor="email" className="formlabel">Email Address:</label>
            <label htmlFor="name-2" className="emptylabel"></label>
            <input id="email" type="email" className="normalinput w-input" maxlength="256" name="email" data-name="Email" placeholder="" required=""/>
        </div>
        <div className="form_div2">
            <label className="formlabel">Date of birth: </label>
            <label className="emptylabel"></label>
            <input id="DOB" type="text" className="normalinput w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="Example Text" required=""/>
        </div>
        <div className="form_div2">
            <label className="formlabel">Country of residence: </label>
            <label className="emptylabel"></label>
            <select id="field-3" name="field-3" className="normalinput w-select">
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

function handleClick(e) {

    if(validateForm()){
        ReactDOM.render(
            <h1>Your submission has been recieved! Please check your email for a comfirmation message!</h1>,
            document.getElementById("reactContainerForm"));
    }
} 

function validateName(firstName, lastName)
{
    let pattern1 = /[A-Z][a-z]+/;

    if (!firstName.value.match(pattern1))
    {
        let form_div = firstName.parentElement;
        let error  = document.createElement("h4");
        
        error.textContent = "This value can't be empty!";
        error.style.color = "red";

        form_div.appendChild(error);
        return false;
    }

    if (!lastName.value.match(pattern1))
    {
        let form_div = firstName.parentElement;
        let error  = document.createElement("h4");
        
        error.textContent = "This value can't be empty!";
        error.style.color = "red";

        form_div.appendChild(error);
        return false;
    }
    return true;
}

function validateEmail(email)
{
    let pattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi
    if(!email.value.match(pattern))
    {
        let form_div = email.parentElement;
        let error  = document.createElement("h4");
        
        error.textContent = "This is not a valid email address!";
        error.style.color = "red";

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

    let form_div = email.parentElement;
    let error  = document.createElement("h4");
        

    let pattern = /^[0-9]{2}\/[0-9]{2}\/2[0-9]{3}$/
    if(!dateOfBirth.value.match())
    {
        error.textContent = "This is not a valid date format!";
        error.style.color = "red";

        form_div.appendChild(error);
        return false;    
    }

    else if(month == 2)
    {
        if(day == 29 && !isLeapYear(year)){  
            error.textContent = "This the year entered is not a leap year!";
            error.style.color = "red";

            form_div.appendChild(error);
            return false;
        }
        else if(day > 29)
        {
            error.textContent = "The day entered is not valid!";
            error.style.color = "red";

            form_div.appendChild(error);
            return false;
        }
    }
    else if( ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day > 31) ||
    ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30))
    {
        error.textContent = "This date is not valid";
        error.style.color = "red";

        form_div.appendChild(error);
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

    return validateName(firstName, lastName) && validateEmail(email) && validateDOB(dateOfBirth);
}
submitFormButton.addEventListener('click', handleClick); 


