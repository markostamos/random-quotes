import React, { Component } from 'react';

import './App.css';
const pallete=["#008E9B","#008F7A","#4B4453","#00C9A7","#C34A36","#B25B00","#402E32","#812A00"];
class App extends Component {
  state={
    text:undefined,
    author:undefined,
    color:undefined
  }
  componentWillMount(){
    this.getQuote();
  }
  getQuote= async ()=>{
   const API_call= await fetch("https://talaikis.com/api/quotes/random/");
   const data=await API_call.json();
   this.setState((state)=>({
     text:data.quote,
     author:data.author,
     color:pallete[Math.floor(Math.random()*pallete.length)]
   }));
   
  }
  render() {
    return (
      <div className="App" style={{backgroundColor:this.state.color}}>
        <div className="card" id="quote-box">
          <div className="mycontainer">
          <i class="fas fa-quote-left"></i><p id="text" style={{color:this.state.color}}>{this.state.text}</p><i class="fas fa-quote-right"></i>
            <p id="author" style={{color:this.state.color}}>{'-'+this.state.author}</p>
          </div>
          <hr/>
          <div class="footer">
        
           <a id="tweeet-quote" href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+ encodeURIComponent('"' +this.state.text + '" ' +'\n'+'-'+ this.state.author)} target="_blank"> <i class="fab fa-twitter myicon" style={{backgroundColor:this.state.color}}></i></a>
            <button id="new-quote" style={{backgroundColor:this.state.color}} onClick={this.getQuote}>Generate Quote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
