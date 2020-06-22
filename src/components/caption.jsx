import React, { Component } from 'react';
class Caption extends Component {
    state = {  }
    render() { 
        return ( <div className="caption">
                <span className="nameincaption">{this.props.name}</span>
                <span className="captiontext">{this.props.captiontext}</span>
           
        </div> );
    }
}
 
export default Caption;