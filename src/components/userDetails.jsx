import React, { Component } from "react";
class UserDetails extends Component {
  state = {};
  render() {
    return (
      <div className="userdetails">
        <div className="dp">
          <img src={this.props.dp} alt="" />
        </div>
        <div className="name">{this.props.name}</div>
      </div>
    );
  }
  randimage = () => {
    return "https://source.unsplash.com/random/50x50?sig=" + Math.floor(Math.random() * 100);
  };
}

export default UserDetails;
