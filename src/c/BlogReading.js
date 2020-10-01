import React, { Component } from 'react';
import './BlogReading.css';




class BlogReading extends Component {
  constructor(props){
    super(props);
    this.state = {
      blogs: [{title: 'Blog1', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},{title:'Blog2', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},{title:'Blog3', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}],
    }
    // this.handleClick = this.handleClick.bind(this)
  }
  handleClick(blogs){
  console.log(blogs);
   };

  render(){
    const blogs = this.state.blogs.map((blog, index) => { let item = this.handleClick.bind(this, blog); return <li onClick={item} key={index}><h5>{blog.title}</h5><p className="blogBody">{blog.body}</p></li>});
    return(
      <React.Fragment>
        <div className="left-aside col-12 col-md-4">
        <div>
          <ul className="bloglist">
            {blogs}
          </ul>
        </div>
      </div>
      <BlogRight />
      </React.Fragment>
    )
  }
}

class BlogRight extends Component {
  // constructor(props){
  //   super(props);
  //   this.setState = {
  //   bloginview: [{}]
  //   }
  // }
  render(){
    console.log(this.props.blogs);
    return(
      <div>
      </div>
    )
  }
}






export default BlogReading;
