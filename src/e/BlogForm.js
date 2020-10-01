import React, { Component } from 'react';

class BlogForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
  event.preventDefault();
  this.props.addBlog(this.state);
  this.setState({title:'', body:''});
  }
  handleInput(event){
  this.setState({[event.target.name]: event.target.value});
  }
  render(){
    return(
      <form className="col-12 col-md-6 mb-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" className ="form-control" id="title" name="title" value={this.state.title} onChange={this.handleInput}/>
        </div>
        <div className="form-group">
        <label htmlFor="body">Body</label>
        <textarea className="form-control" id="body" name="body" rows="8" value={this.state.body} onChange={this.handleInput}/>
        </div>
        <button className="btn btn-primary"type="submit">Save Post</button>
      </form>
    )
  }
}
export default BlogForm;
