import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render((
    <div className="outerformblock w-form">
      <form id="email-form-2" name="email-form-2" data-name="Email Form 2" className="formblock">
        <div className="form_div2">
            <label htmlFor="name" className="formlabel">First name:</label>
            <label className="emptylabel"></label>
            <input type="text" className="normalinput w-input" maxlength="256" name="name" data-name="Name" placeholder="" id="name" />
        </div>
        <div className="form_div2">
            <label htmlFor="email" className="formlabel">Email Address:</label>
            <label htmlFor="name-2" className="emptylabel"></label>
            <input type="email" className="normalinput w-input" maxlength="256" name="email" data-name="Email" placeholder="" id="email" required=""/>
        </div>
        <div className="form_div2">
            <label className="formlabel">Date of birth: </label>
            <label className="emptylabel"></label>
            <input type="text" className="normalinput w-input" maxlength="256" name="field-2" data-name="Field 2" placeholder="Example Text" id="field-2" required=""/>
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
        <div className="form_div2">
            <label className="formlabel">Form Label</label>
            <label className="emptylabel"></label>
            <input type="text" className="normalinput w-input" maxlength="256" name="field-4" data-name="Field 4" placeholder="Example Text" id="field-4" required=""/>
        </div>
        <div className="div-block-12"><input id="submitB" type="submit" value="Submit" data-wait="Please wait..." className="w-button"/></div>
      </form>
    </div>
), document.getElementById("reactContainerForm"));

let submitFormButton = document.getElementById("submitB");

function handleClick(e) {
    ReactDOM.render(
        <h1>Your submission has been recieved! Please check your email for a comfirmation message!</h1>,
        document.getElementById("reactContainerForm"));
} 

submitFormButton.addEventListener('click', handleClick); 

