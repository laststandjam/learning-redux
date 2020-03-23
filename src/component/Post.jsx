import React from "react";
import { Component, useState, useEffect } from "react";
import {connect } from 'react-redux'
import {fetchPosts} from '../actions/postActions'

class Posts extends Component {
    componentDidMount() {
      this.props.fetchPosts();
    }
render(){
    return (
    <div>   
        <h1>Posts</h1>
        {this.props.posts.map(post => (
          <div key={post.id}>
              
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              </div>
        ))}
    </div>
  );
};
}

const mapStateToProps = state =>({
    posts: state.posts.items
})
export default connect(mapStateToProps, {fetchPosts})(Posts);
