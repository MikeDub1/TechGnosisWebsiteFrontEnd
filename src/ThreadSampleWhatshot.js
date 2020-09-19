import React from 'react';


class ThreadSampleWhatsHot extends React.Component{

    
    render(){      
        return (
            <div className="threadcontainer">
                <img src="images/Icon-2.svg" loading="lazy" alt="" className="image-5"/>
                <div className="threadsampleheadings">
                    <h5>{this.props.threadTitle}</h5>
                    <h5>{this.props.threadPreview}</h5>
                </div>
            </div>);
    }
}

export default ThreadSampleWhatsHot;