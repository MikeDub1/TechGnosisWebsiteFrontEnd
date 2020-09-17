import React, {Component} from 'react';

class NavPrev extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            style: {backgroundImage: 'url(contactus-techgnosis-webflow/images/portfolio-1---wide.svg)'},
            h1: "BlahBlahBlah",
            h2: "BlahBlah"
        }
    }

    handleClick = (event) => {
        let src = event.srcElement;
        if(src.id == "join")
        {
            this.state = {
                style : {backgroundImage: 'url(contactus-techgnosis-webflow/images/portfolio-1---wide.svg)'},
                h1 : "BlahBlahBlah",
                h2 : "BlahBlah"
            }
        }

        else if(src.id = "services")
        {
            this.state = {
                style : {backgroundImage: 'url(contactus-techgnosis-webflow/images/portfolio-2---wide.svg)'},
                h1:"This is my 2nd button",
                h2 : "Service information goes here!"
            }
        }

        else if(src.id = "contact-us")
        {
            this.state = {
                style : {backgroundImage: 'url(contactus-techgnosis-webflow/images/portfolio-3---wide.svg)'},
                h1: "This is my 3rd button",
                h2: "Contact us information goes here!"
            }
        }
        else return;
    }
    render(){
        return(
            <>
                <div id="inner_react" style={this.state.style}>
                    <h1>{this.state.h1}</h1>
                    <h2>{this.state.h2}</h2>
                </div>
            </>
        );
    }
}

export default NavPrev;