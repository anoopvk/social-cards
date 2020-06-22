import React, { Component } from 'react';
import './App.css';
import data from "./data/data.json";
import Cards from "./components/cards";

class app extends Component {
  state = {data:data}
  render() {
    return (
      <div className="app container">
        {this.state.data.map((d) => {
          return <Cards key={d.id} postdata={d} />
        }
        )
        }
         
      </div>
    );
  }
 
}

export default app;

