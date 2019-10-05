import "./App.css";
import React, { Component } from "react";
import classNames from 'classnames';
import Toggle from './toggle';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isToggleOn: true
    };
  
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
}


render() {

var classes = classNames({
  'App': true,
  'blackButton' : !this.state.isToggleOn ,
  'whiteButton' : this.state.isToggleOn
});


  if(this.state.isToggleOn){
return(
    <div className={classes}>
      <div className="container">
        <div className="row" style={{marginBottom:"0px"}}>
            <div className="col s12 center" style={{marginTop:"30px"}}>
            <button className="waves-effect waves-light btn" onClick={this.handleClick}>Dark Theme</button>
            </div>
        </div>
        <div className="row">
            <div className="col s12 center">
                <Toggle isDarkTheme = {this.state.isToggleOn}/>
            </div>
        </div>
      </div>
    </div>
  );
}

else
{
  return(
    <div className={classes}>
      <div className="container">
        <div className="row" style={{marginBottom:"0px"}}>
            <div className="col s12 center" style={{marginTop:"30px"}}>
            <button className="waves-effect waves-light btn" onClick={this.handleClick}>Light Theme</button>
            </div>
        </div>
        <div className="row">
            <div className="col s12 center">
                <Toggle/>
            </div>
        </div>
      </div>
    </div>
  );
}
} 
}

export default App;