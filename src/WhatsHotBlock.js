import React, {Component} from 'react';


class WhatsHotBlock extends React.Component{
    render()
    {
        return (
        <React.StrictMode>
            <div>
                <div class="div-block-7">
                    <h2 class="heading-15">Whats hot in community {this.props.community}?</h2>
                </div>
                <div class="threadcontainer"><img src="images/Icon-2.svg" loading="lazy" alt="" class="image-5"/>
                    <div class="threadsampleheadings">
                        <h5>{this.props.threadTitle}</h5>
                        <h5>{this.props.threadPreview}</h5>
                    </div>
                </div>
            </div>
        </React.StrictMode>);
    }
}

export default WhatsHotBlock;