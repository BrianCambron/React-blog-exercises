import React, { Component } from 'react';
import './BlogReading.css';




class BlogReading extends Component {
  constructor(props){
    super(props);
    this.state = {
      blogs: [{title: 'Blog1', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},{title:'Blog2', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},{title:'Blog3', body:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}],
      pickedBlog: {},
    }
    this.handleClick = this.handleClick.bind(this)
  }
  
  handleClick(blogIndex) {
      const blogPost = this.state.blogs[blogIndex];
      this.setState({pickedBlog: blogPost});
      console.log(this.state.pickedBlog);
    }

  render() {
    const blogs = this.state.blogs.map((blog, index) => (<li onClick={() => this.handleClick(index)} key={index}><h5>{blog.title}</h5><div className="blogBody"><p>{blog.body}</p></div></li>));
    return(
      <React.Fragment>
        <div className="left-aside col-12 col-md-4">
        <div>
          <ul className="bloglist">
            {blogs}
          </ul>
        </div>
      </div>
      <BlogRight pickedBlog={this.state.pickedBlog}/>
      </React.Fragment>
    )
  }
}

class BlogRight extends Component {
  render(){
    console.log(this.props.pickedBlog);
    return(
      <div className="col-12 col-md-4 clicked-blog">
      <div>
      <h5>{this.props.pickedBlog.title}</h5>
      <p>{this.props.pickedBlog.body}</p>
      </div>
      </div>
    )
  }
}






export default BlogReading;
