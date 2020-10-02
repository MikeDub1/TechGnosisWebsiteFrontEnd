import React, {Component} from 'react'

//FIXME: add a thread author...
class FavoriteThread extends Component{

    render()
    {
        return (
            <div className="favoritethread">
                <img src="../images/Icon-1.svg" width="74" alt=""/>
                <div className="div-block-20">
                    <h5 className="heading-7">{this.props.threadTitle}</h5>
                    <div className="div-block-21"></div>
                </div>
            </div>
        )
    }
}