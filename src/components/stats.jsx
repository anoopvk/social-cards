import React, { Component } from "react";
import Votes from "./votes";
class Stats extends Component {
  state = {
    upvote: 0,
    downvote: 0,
  };
  render() {
    return (
      <div className="stats">
        <Votes
          votes={this.props.upvotes}
          type="upvote"
          votestate={this.state.upvote}
          onlyonetypeactive={this.onlyonetypeactive}
          handleclick={this.handleupvoteclick}
          // setclick={}
        />
        <Votes
          votes={this.props.downvotes}
          type="downvote"
          votestate={this.state.downvote}
          onlyonetypeactive={this.onlyonetypeactive}
          handleclick={this.handledownvoteclick}
          // setclick={}
        />
      </div>
    );
  }

  handleupvoteclick=()=>{
    let upvotestate=this.state.upvote;
    upvotestate=++upvotestate%2;
    this.setState({upvote:upvotestate});
    if(upvotestate===1){
     this.setState({downvote:0});
    }
  }
  handledownvoteclick=()=>{
    let downvotestate=this.state.downvote;
    downvotestate=++downvotestate%2;
    this.setState({downvote:downvotestate});
    if(downvotestate===1){
      this.setState({upvote:0});
     }
  }








  // onlyonetypeactive = (type, status) => {
  //   console.log(type);
  //   console.log(status);
  //   if (type === "upvote") {
  //     this.setState({ upvote: status });
  //     if (status === 1) {
  //       this.setState({ upvote: 1, downvote: 0 });
  //     }
  //   }
  //   if (type === "downvote") {
  //     this.setState({ downvote: status });
  //     if (status === 1) {
  //       this.setState({ upvote: 0, downvote: 1 });
  //     }
  //   }
  // };
}

export default Stats;
