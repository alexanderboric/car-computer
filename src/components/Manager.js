import '../App.css';
import React, { Component, } from 'react';

import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default class Manager extends Component {
  constructor(props) {
    super(props);

    this.navbar = React.createRef();
  }



  returnPage = () => {

    return (
      <h1>Das war ein Schuss in den Offen</h1>
    );
  }

  render() {


    return (
      <div className="App" style={{ display: 'flex' }}  >
        <Navbar ref={this.navbar}></Navbar>


        {/* <div style={{ justifyContent:'center',position:'absolute',right:0,top:0, width:"91%", height:"100%"}}>
                    {this.state.page}
                    
                </div> */}
        <div style={{ justifyContent: 'center', position: 'absolute', right: 0, top: 0, width: "91%", height: "100%" }}>
          <Outlet />
        </div>
      </div>
    )
  }

}