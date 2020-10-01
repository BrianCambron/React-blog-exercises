import React, { Component } from 'react';
import BlogBoard from './a/BlogBoard';
import PeopleBoard from './b/PeopleBoard'
import BlogReading from './c/BlogReading'
import BlogApp from './e/BlogApp'
import './App.css';



class App extends Component {
constructor(props){
  super(props);
  this.state = {
    display: 'BlogBoard'
  }
}
render(){
  // const display = this.state.display;
  // let html;
  //
  // if(display === 'BlogBoard'){
  //   html = <BlogBoard />
  // } else if (display === "PeopleBoard") {
  //   html = <PeopleBoard />
  // } else if (display === 'Blog') {
  //  html = <BlogReading />
  // }
  return(
    <BlogApp />
  )
}
}

export default App;
