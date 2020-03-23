import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {connect } from 'react-redux'

const Posts = () => {
return (
    <div>   
        <h1>Posts</h1>
        {posts.map(post => (
          <div key={post.id}>
              
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              </div>
        ))}
    </div>
  );
};


export default Posts;
