import React, {Component} from 'react'

class ErrorMessage extends Component{
    state = {
        message : 'Either the username or the password is incorrect.'
    }

    handleErrorMessageChange = (errorCode) => {
        console.log("changing message...")
        console.log(errorCode);
        if(errorCode == 404){
            this.setState({
                message : '404: Either the username or the password is incorrect.'
            });
        }

        if(errorCode == 500){
            this.setState({
                message : '500: Internal server error! There is a bug in the server and we are looking into it. Please check back later.'
            });
        }
    }

    render() {
        return (
            <div className="w-form-fail" style={{display: 'block', visibility: 'visible'}}>
                <div>{this.state.message}</div>
            </div>
        );
    }
}

export default ErrorMessage;