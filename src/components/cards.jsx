import React, { Component } from "react";
// import Post from "./post";
import UserDetails from "./userDetails";
import Caption from "./caption";
import Stats from "./stats";
class Cards extends Component {
  state = {};
  render() {
    console.log(this.props.postdata.image);
    return (
      <div className="box">
        {/* {this.props.postdata.name} */}
        <UserDetails
          dp={this.props.postdata.dp}
          name={this.props.postdata.name}
        />
        <div className="image">
          <img src={this.props.postdata.image} alt="" />

        </div>
        {this.captionhasvalue()}
        <Stats upvotes={this.props.postdata.upvotes}
        downvotes={this.props.postdata.downvotes}
        />
      </div>
    );
  }

  randimage = () => {
    return "https://source.unsplash.com/random/?sig=" + Math.floor(Math.random() * 1000);
  };
 
  captionhasvalue = () => {
    if (this.props.postdata.caption !== "") {
      return (
        <Caption
          name={this.props.postdata.name}
          captiontext={this.props.postdata.caption}
        />
      );
    } else return "";
  };
}

export default Cards;
