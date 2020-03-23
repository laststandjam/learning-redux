import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch=>{
    async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");

      dispatch({
          type: FETCH_POSTS,
          payload: result.data
      })
    };
  };


