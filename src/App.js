import React, {Component} from 'react';

class App extends React.Component
{
    render(assets){
        return(
            <React.StrictMode>
                <div id="joinUsDiv">
                    <h1>{assets.h1}</h1>
                    <h2>{assets.h2}</h2>
                </div>
            </React.StrictMode>
        );
    }
}

export default App;