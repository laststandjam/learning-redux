import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");

      setPosts(result.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>   <h1>Posts</h1>
        {posts.map(post => (
          <div key={post.id}>
              
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              </div>
        ))}
    </div>
  );
};

//  class Posts extends Component {
//      componentWillMount(){
//          fetch('https://jsonplaceholder.typicode.com/posts')
//          .then(res=> res.json())
//          .then(data=> console.log(data))
//      }
//     render() {
//         return (
//             <div>
//                 <h1>posts</h1>
//             </div>
//         )
//     }
// }

export default Posts;
