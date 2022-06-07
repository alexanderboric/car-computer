import React, {Component} from "react";
import "../App.css";
import './Navbar.css';




export default class NavbarButton extends Component{
    constructor(props) {
        super(props);
        
      }

      render() {
        
        
        return(
        <div className="Navbar-Buttons" onClick={this.props.onClick}>
            <img src={this.props.src} className="Navbar-Button-Images" style={{filter: "invert(1)"}} alt="Navbar Button"></img>
          
            
            
        </div>
        )
      }
    
}