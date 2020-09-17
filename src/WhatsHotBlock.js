import React, {Component} from 'react';


class WhatsHotBlock extends React.Component{
    render()
    {
        return (
        <React.StrictMode>
            <div>
                <div className="div-block-7">
                    <h2 className="heading-15">Whats hot in community {this.props.community}?</h2>
                </div>
                <div className="threadcontainer">
                    <img src="images/Icon-2.svg" loading="lazy" alt="" className="image-5"/>
                    <div className="threadsampleheadings">
                        <h5>{this.props.threadTitle}</h5>
                        <h5>{this.props.threadPreview}</h5>
                    </div>
                </div>
            </div>
        </React.StrictMode>);
    }
}

export default WhatsHotBlock;