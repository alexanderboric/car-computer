import '../App.css';
import ReactDOM from "react-dom";
import React, { useRef, useState, Suspense, Component, } from 'react';

import Home from './Home';
import Music from './Music';
import Navbar from './Navbar';
import Settings from './Settings';
import Radio from './Radio';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';

export default class Manager extends Component {
  constructor(props) {
    super(props);

    this.navbar = React.createRef();
    this.state = {
      page: <Home></Home>
    }
  }
  asignNavbar = (page) => {
    // this.setState(this.state.page, childelement.state.page);
    switch (page) {
      case "home":
        this.setState({ page: <Home></Home> })
        break;

      case "music":
        this.setState({ page: <Music></Music> })
        break;


      case "radio":
        this.setState({ page: <Radio></Radio> })
        break;

      case "settings":
        this.setState({ page: <Settings></Settings> })
        break;

      case "navigation":
        this.setState({ page: <Navigation></Navigation> });
        break;



      default:
        this.setState({ page: <Home></Home> })
        break;
    }

    // alert("der State der NAvbar ist: "+childelement.state.page)


  }


  returnPage = () => {

    return (
      <h1>Das war ein Schuss in den Offen</h1>
    );
  }

  render() {


    return (
      <div className="App" style={{ display: 'flex' }}  >
        <Navbar ref={this.navbar} onClick={this.asignNavbar}></Navbar>


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

function renderPage() {


  switch (this.navbarelem.state.page) {
    case "home":
      return (<Home></Home>);


    case "music":
      return (<Music></Music>);


    case "radio":
      return (<Radio></Radio>);

    case "settings":
      return (<Settings></Settings>);



    default:
      return (
        <h1>Ein Fehler beim Bestimmen der Seite ist aufgetreten</h1>
      );
  }
}