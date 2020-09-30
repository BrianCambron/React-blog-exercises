import React, { Component } from 'react';
import BlogBoard from './a/BlogBoard';
import './App.css';




class App extends Component {
constructor(props){
  super(props);
  this.state = {
    display: 'BlogBoard'
  }
}
render(){
  return(
    <BlogBoard />
  )
}
}

export default App;
