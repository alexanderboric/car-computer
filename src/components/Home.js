import React, {Component} from "react";
import "../App.css";


export default class Home extends Component{
    constructor(props) {
        super(props);
        
      }

      render() {
        
        
        return(
            <div style={{width:"100%",height:"100%", display:'flex', justifyContent:'center', alignItems:'center'}}>
                <h1>This will be the Home</h1>
            </div>  
        )
      }
    
}