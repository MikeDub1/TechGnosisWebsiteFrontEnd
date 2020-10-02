import React, {Component} from 'react'

class FavoriteThreadBlock extends Component{
    render()
    {
        return (
            <div className="favoritethread">
                <img src={this.props.image}></img>
                <div className="div-block-20">
                    <h4 className="followingthreadtitle">{this.props.title}</h4>
                    <h5 className="followingthreadtitle">{this.props.author}</h5>
                </div>
            </div>
        )
    }
}

export default FavoriteThreadBlock;