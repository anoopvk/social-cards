import React, { Component } from 'react';
class Votes extends Component {
    state = { 
        voted:0,
     }
    render() { 
        return ( 
            <React.Fragment>
                <button 
                className={this.setcls()} 
                onClick={this.props.handleclick}
                >
                {this.setsymbol()}
                 {this.props.votes+this.props.votestate}
        </button>
            </React.Fragment>
         );
    }

    setsymbol=()=>{
        if(this.props.type==="upvote"){
            return (<svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-alt-circle-up"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm292 116V256h70.9c10.7 0 16.1-13 8.5-20.5L264.5 121.2c-4.7-4.7-12.2-4.7-16.9 0l-115 114.3c-7.6 7.6-2.2 20.5 8.5 20.5H212v116c0 6.6 5.4 12 12 12h64c6.6 0 12-5.4 12-12z"
            ></path>
          </svg>);
        }
        if(this.props.type==="downvote"){
            return <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-down"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM212 140v116h-70.9c-10.7 0-16.1 13-8.5 20.5l114.9 114.3c4.7 4.7 12.2 4.7 16.9 0l114.9-114.3c7.6-7.6 2.2-20.5-8.5-20.5H300V140c0-6.6-5.4-12-12-12h-64c-6.6 0-12 5.4-12 12z"></path></svg>
        }
    }


    setcls=()=>{
        let st=this.props.votestate;
        let type= this.props.type;
        let cls="vote ";
        if(st===1){
            if(type==="upvote"){
                cls+=" clickedupvote";
            }
            if(type==="downvote"){
                cls+=" clickeddownvote";
            }
        }
        return cls;
    }
   
}
 
export default Votes;