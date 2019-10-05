import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button.js";
import Input from "./components/Input.js";
import ClearButton from "./components/ClearButton.js";
import { sqrt, pow, abs} from "mathjs";

class Scientific extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }


  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };

  addDecimal = val => {
    // only add decimal if there is no current decimal point present in the input area
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = val => {
    // if this.state.input is not empty then add zero
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
  };

  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "subtract";
  };
  
  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiply";
  };

  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide";
  };
  SquareRoot = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "root";
    // sqrt(-4)
  }
  Square = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "square";
    // sqrt(-4)
  }
  Sign = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "sign";
    // sqrt(-4)
  }
  evaluate = () => {
    this.state.currentNumber = this.state.input;

    if (this.state.operator === "plus") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "subtract") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber)
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber)
      });
    }
    else if(this.state.operator === "root"){
      this.setState({
        input:sqrt(parseInt(this.state.previousNumber))
      });
    }
    else if(this.state.operator === "square"){
      this.setState({
        input:pow(parseInt(this.state.previousNumber),2)
      });
    }
    else if(this.state.operator === "sign"){
     if(parseInt(this.state.previousNumber)>0){
       this.setState({
         input: -abs(parseInt(this.state.previousNumber))
       });
     }
     else{
      this.setState({
        input: abs(parseInt(this.state.previousNumber))
      });
     }
    }
  };

  render() {
    return (
      <div className="Scientific" style={{backgroundColor:this.state.bgColor}}>
        
        <div className="row" style={{marginLeft: 0,display: "contents"}}>
      <center>
      <div className="calc-wrapper">
        
        <div className="row" style={{marginBottom: 0}}>
          <Input darkTheme={this.props.isDarkTheme}>{this.state.input}</Input>
        </div>
        <div className="row"  style={{marginBottom: 0}}>
          <Button handleClick={this.addToInput} darkTheme={this.props.isDarkTheme}>7</Button>
          <Button handleClick={this.addToInput} darkTheme={this.props.isDarkTheme}>8</Button>
          <Button handleClick={this.addToInput} darkTheme={this.props.isDarkTheme}>9</Button>
          <Button handleClick={this.divide} darkTheme={this.props.isDarkTheme}>/</Button>
        </div>
        <div className="row" style={{marginBottom: 0}}>
          <Button handleClick={this.addToInput} darkTheme={this.props.isDarkTheme}>4</Button>
          <Button handleClick={this.addToInput} darkTheme={this.props.isDarkTheme}>5</Button>
          <Button handleClick={this.addToInput} darkTheme={this.props.isDarkTheme}>6</Button>
          <Button handleClick={this.multiply} darkTheme={this.props.isDarkTheme}>*</Button>
        </div>
        <div className="row" style={{marginBottom: 0}}>
          <Button handleClick={this.addToInput} darkTheme={this.props.isDarkTheme}>1</Button>
          <Button handleClick={this.addToInput} darkTheme={this.props.isDarkTheme}>2</Button>
          <Button handleClick={this.addToInput} darkTheme={this.props.isDarkTheme}>3</Button>
          <Button handleClick={this.add} darkTheme={this.props.isDarkTheme}>+</Button>
        </div>
        <div className="row" style={{marginBottom: 0}}>
          <Button handleClick={this.addDecimal} darkTheme={this.props.isDarkTheme}>.</Button>
          <Button handleClick={this.addZeroToInput} darkTheme={this.props.isDarkTheme}>0</Button>
          <Button handleClick={this.evaluate} darkTheme={this.props.isDarkTheme}>=</Button>
          <Button handleClick={this.subtract} darkTheme={this.props.isDarkTheme}>-</Button>
        </div>
        <div className="row" style={{marginBottom: 0}}>
          <Button handleClick={this.SquareRoot} darkTheme={this.props.isDarkTheme}>√</Button>
          <Button handleClick={this.Square} darkTheme={this.props.isDarkTheme}>x2</Button>
          <Button handleClick={this.Sign} darkTheme={this.props.isDarkTheme}>+/-</Button>
          <ClearButton handleClear={this.clearInput} darkTheme={this.props.isDarkTheme}>Clear</ClearButton>
        </div>
        
      </div>
   
      </center>
      </div>         
        </div>
    );
  }
}

export default Scientific;
