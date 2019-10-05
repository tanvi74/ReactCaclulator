import React, { Component } from "react";
import "./Button.css";

class Button extends Component {


  isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
  };

  isWord = val => {
    return val === "Light Mode" || val === "Dark Mode" || val === "Scientific Caculator";
  }

  render() {
    return( 
      <div 
        className={`button ${this.isOperator(this.props.children) ? "" : "operator"}  ${this.isWord(this.props.children) ? "word" : ""}`}
        style={{backgroundColor: this.props.darkTheme ? "#f0f0f0" :'#666' ,color: this.props.darkTheme ?  "#000" : '#fff'}}
        onClick={() => this.props.handleClick(this.props.children)}
      >
        {this.props.children}
      </div>
    )
  }
}

const styles = {
  buttonStyle:{
    
  }
}

export default Button;
