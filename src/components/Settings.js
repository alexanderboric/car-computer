import React, {Component} from "react";
import "../App.css";


export default class Settings extends Component{
    constructor(props) {
        super(props);
        
      }

      render() {
        
        
        return(
            <div style={{width:"100%",height:"100%", display:'flex', justifyContent:'center', alignItems:'center'}}>
              <h1>This will be the settings</h1>
            </div>  
        )
      }
    
}