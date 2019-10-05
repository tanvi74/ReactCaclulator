import React, { Component } from "react";
import "./ClearButton.css";

class ClearButton extends Component {
  render() {
    return( 
      <div 
        className="clear-btn"
        onClick={() => this.props.handleClear()}
        style={{ backgroundColor: this.props.darkTheme ? "#bfbfbf" :'#666' ,color: this.props.darkTheme ?  "#000" : '#fff'}}
      >
        {this.props.children}
      </div>
    )
  }
}

export default ClearButton;
