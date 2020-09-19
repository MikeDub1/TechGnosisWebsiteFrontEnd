import React, {Component} from 'react';

class NavPrev extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            style: {backgroundImage: 'url(contactus-techgnosis-webflow/images/portfolio-1---wide.svg)'},
            h1: "BlahBlahBlah",
            h2: "BlahBlah",
            href: "contactus-techgnosis-webflow/work/project1.html",
            buttonText: "Join the revolution!!!"
        }
    }

    handleClick = (event) => {
        let src = event.srcElement;
        if(src.id == "join")
        {
            this.setState({
                style : {backgroundImage: 'url(contactus-techgnosis-webflow/images/portfolio-1---wide.svg)'},
                h1 : "BlahBlahBlah",
                h2 : "BlahBlah",
                href: "contactus-techgnosis-webflow/work/project1.html",
                buttonText: "Join the revolution!!!"
            });    
        }

        else if(src.id == "services")
        {
            this.setState({
                style : {backgroundImage: 'url(contactus-techgnosis-webflow/images/portfolio-2---wide.svg)'},
                h1:"This is my 2nd button",
                h2: "Service information goes here!",
                href: 
            });
        }

        else if(src.id == "contact-us")
        {
            this.setState({
                style : {backgroundImage: 'url(contactus-techgnosis-webflow/images/portfolio-3---wide.svg)'},
                h1: "This is my 3rd button",
                h2: "Contact us information goes here!"
            });
        }

        else if(src.id == "forumsButton")
        {
            this.setState({
                style: {backgroundImage: 'url(contactus-techgnosis-webflow/images/portfolio-4---wide.svg)'},
                h1: "This is my 4th button",
                h2: "The forums page will work someday, I swear!"
            });
        }
        else{
            this.setState({
                style: {backgroundImage: 'url(contactus-techgnosis-webflow/images/Icon-1.svg)'},
                h1: "Find out more about our amazing start up!",
                h2: "Meet the Founders!"
            });
        }
    }

    render(){
        return(
            <>
                <div id="inner_react" style={this.state.style}>
                    <h1>{this.state.h1}</h1>
                    <h2>{this.state.h2}</h2>
                    <a href={this.state.href}>{this.state.buttonText}</a>
                </div>
            </>
        );
    }
}

export default NavPrev;