import React, {Component} from 'react';
import ThreadSampleWhatsHot from './ThreadSampleWhatshot.js'


class WhatsHotBlock extends React.Component{

    constructor(){
        super();

        this.state = {
            threadSamples: []
        };
    }
    handleThreadSampleListChange = (newThread) =>
    {
        console.log("changing state...");
        this.state.threadSamples.concat([newThread]);
    }

    render()
    {
        return (
        <React.StrictMode>
            <div>
                <div className="div-block-7">
                    <h2 className="heading-15">Whats hot in community {this.props.community}?</h2>
                </div>
                {this.state.threadSamples.map(t => <ThreadSampleWhatsHot threadTitle={t.title} threadPreview={t.preview} />)}
            </div>
        </React.StrictMode>);
    }
}

export default WhatsHotBlock;