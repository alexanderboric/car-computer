
import React, { Component } from 'react';
import cover from '../assets/images/cover.jpeg';
import cover2 from '../assets/images/cover2.jpeg';
import './Music.css';
import '../App.css';
import './Glitch.css'

const timelinesize= 15; //size of the timeline in Percent of the Heigth
const spacingLeft=40;// distance from cover art and timeline to the navbar

export default class Music extends Component {

  

  constructor(props) {
    super(props);

    // Der State wird hinterher mit den Daten vom Esp 32 erneuert
    this.state = {
      title:"2055",
      artist:"Sleepy Hallow",
      album:"Still Sleep?",
      image:cover,
      currentpostion:88,
      songlength: 176,
    }
  }

  
  

  render() {
    
     
    return(
      <div  style={{width:"100%", height:"100%", position:'absolute',}}>
         <div className='Music-Background-Image-Container' >
           <img className="Music-Background-Image" src={this.state.image} alt="Music background"></img>
         </div>

        <div style={{ width:"100%",height:100-timelinesize+"%", display:"flex",  alignItems:'center'}}>
          {/* <div style={{ height:'100%', display:'flex',flexDirection:'column', justifyContent:'center', alignItems:'flex-start', marginLeft:spacingLeft,}}>
              <img className="Cover-Image"  src={this.state.image}></img>
          </div> */}
          <div style={{backgroundImage: `url(${this.state.image})`, marginLeft:spacingLeft}} className="Cover-Image-Background-Image-Test">
            
          </div>
          
          <div style={{textAlign:'left',height:"70vh", width:"45%",margin:40 ,display:'flex',flexDirection:'column', justifyContent:'flex-end'}} >
            

            <div className='glitch-wrapper'>
              <h1 className="glitch" data-text="Test">Test</h1>
            </div>
            <button onClick={()=>{ this.state.image==cover? this.setState({image:cover2}): this.setState({image:cover})}}>manipulate State</button>
            <h1 className='Title-Text'>{this.state.title}</h1>
            <h1 className="Normal-Text">{this.state.artist}</h1>
            <h1 className="Normal-Text">{this.state.album}</h1>
            
          </div>
          
        </div>

        <div>
          
        </div>



        <div style={{width:'100%', height:timelinesize+"%", display:'flex', flexDirection:'row', alignItems:'center', marginBottom:"30px"}} >
          <div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start',marginLeft:spacingLeft}}>
            <h1 className="Normal-Text"> {secondsToTime(this.state.currentpostion)}</h1>
          </div>
          
          <div className="Music-Timeline-Background" style={{ flex:1, height:"30%", marginLeft:20, marginRight:20 }}>
            <div className="Music-Timeline Glow" style={{width:(this.state.currentpostion/this.state.songlength)*100+"%",height:"100%",}}></div>
          </div>
          <div style={{marginRight:spacingLeft,}}>
            <h1 className="Normal-Text"> {secondsToTime(this.state.songlength)}</h1>
          </div>
        </div>
        
       

      </div>
    )
  }

}

function secondsToTime(e){
  var h = Math.floor(e / 3600).toString().padStart(2,'0'),
      m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
      s = Math.floor(e % 60).toString().padStart(2,'0');
  
  return  m + ':' + s;
  //return `${h}:${m}:${s}`;
}