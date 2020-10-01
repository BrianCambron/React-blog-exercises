import React, { Component } from 'react';
import BlogBoard from './a/BlogBoard';
import PeopleBoard from './b/PeopleBoard'
import BlogReading from './c/BlogReading'
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
    <BlogReading />
  )
}
}

export default App;
