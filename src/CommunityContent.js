import React, {Component} from 'react'
import NormalThreadBlock from './normalThreadPreview.js'

class CommunityContent extends Component{

    render(){
        return(
            <div className="section cc-home-wrap">
                <div className="div-block-17">
                <div className="div-block-18">
                    <div className="div-block-19">
                    <h1 className="heading-6">Heading</h1>
                    </div>
                </div>
                <div className="content">
                    <div className="favthreadtable">
                        <div className="div-block-22">
                            <h4 className="heading-8">Heading</h4>
                        </div>
                        
                    </div>
                    <div className="mainthreads">
                        <div className="mainthreaddivheader"></div>
                        {this.props.threads.map(thread => <NormalThreadBlock threadTitle = {thread.name} username = {thread.author}/>)}
                    </div>
                </div>
                </div>
            </div>
            )
    }
}

export default CommunityContent;