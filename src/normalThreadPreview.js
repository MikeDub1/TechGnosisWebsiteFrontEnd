import React, {Component} from 'react'

class NormalThreadBlock extends Component{

    render()
    {
        return (
            <div className="threadblock">
                    <div>
                        <img src="../images/Icon-1_1.svg" width="67" alt=""/></div>
                        <div className="div-block-25 w-clearfix">
                        <h4 className="threadtitle">Thread: {this.props.threadTitle}</h4>
                        <h4 className="threadcreatedby">By: {this.props.username}</h4>
                    </div>
                    <div className="threadpreview">
                    <div className="w-embed"></div>
                </div>
            </div>
        )
    }
}

export default NormalThreadBlock;