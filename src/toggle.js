import React, { Component } from "react";
import Science from './scientific';
import Standard from './standard';

class Toggle extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isToggleOn: true,
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

  if(this.state.isToggleOn){
return(
    <div className="Toggle">
      <div className="container">
        <div className="row">
            <div className="col s12 center" style={{marginTop:"30px"}}>
            <button className="waves-effect waves-light btn" onClick={this.handleClick}>Scientific Calculator</button>
            </div>
        </div>
        <div className="row">
            <div className="col s12 center">
                <Standard isDarkTheme = {this.props.isDarkTheme}/>
            </div>
        </div>
      </div>

    </div>
  );
  }

else
{
  return(
    <div className="Toggle">
      <div className="container">
        <div className="row">
            <div className="col s12 center"  style={{marginTop:"30px"}}>
            <button className="waves-effect waves-light btn" onClick={this.handleClick}>Standard Calculator</button>
            </div>
        </div>
        <div className="row">
            <div className="col s12 center">
                <Science isDarkTheme = {this.props.isDarkTheme}/>
            </div>
        </div>
      </div>
    </div>
  );
}
} 
}


export default Toggle;



