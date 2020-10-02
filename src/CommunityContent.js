import React, {Component} from 'react'
import NormalThreadBlock from './normalThreadPreview.js'
import FavoriteThreadBlock from "./FavoriteThreadBlock.js"

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
                        <div className="div-block-22"><h4 classname="heading-8">Following threads...</h4></div>
                        {this.props.following.map(thread => <FavoriteThreadBlock 
                                                title={thread.name} 
                                                author={thread.author}
                                                image={thread.favicon}/>
                                                )}
                    </div>
                    <div className="mainthreads">
                        <div className="mainthreaddivheader"></div>
                            {this.props.threads.map(thread => <NormalThreadBlock 
                                                    threadTitle = {thread.name} 
                                                    username = {thread.author} 
                                                    favicon={thread.favicon}/>
                                                )}
                    </div>
                </div>
                </div>
            </div>
            )
    }
}

export default CommunityContent;