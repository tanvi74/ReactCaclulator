import React, { Component } from "react";
import "./Input.css";

class Input extends Component {
  render() {
    return( 
      <div className="input" style={{backgroundColor: this.props.darkTheme ? "#000" :'#bfbfbf', color: this.props.darkTheme ?  "#fff" : '#000'}}>
        {this.props.children}
      </div>
    )
  }
}

export default Input;
