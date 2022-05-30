import React, {Component} from "react";
import icons from "../assets/svg-icons";
import "../App.css";




export default class NavbarButton extends Component{
    constructor(props) {
        super(props);
        
      }

      render() {
        
        
        return(
        <div className="Navbar-Buttons" onClick={this.props.onClick}>
            <img src={this.props.src} className="Navbar-Button-Images" ></img>
            
            
        </div>
        )
      }
    
}