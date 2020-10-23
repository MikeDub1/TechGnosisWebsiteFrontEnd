import React, {Component} from 'react'

class ErrorMessage extends Component{
    state = {
        message : 'Either the username or the password is incorrect.'
    }

    handleErrorMessageChange = (response_object) => {
        console.log("changing message...")
        console.log(response_object.status_code);
        
        if(response_object.status_code != 200)
        {
            this.setState({
                message : response_object.message
            })
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