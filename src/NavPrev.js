import React, {Component} from 'react';

class App extends React.Component
{
    render(){
        return(
            <React.StrictMode>
                <div id="inner_react" style={this.props.image}>
                    <h1>{this.props.h1}</h1>
                    <h2>{this.props.h2}</h2>
                </div>
            </React.StrictMode>
        );
    }
}

export default App;
