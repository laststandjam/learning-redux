import {FETCH_POSTS, NEW_POSTS } from '../actions/types'
import axios from 'axios'

export const fetchPosts = () => async dispatch=>{
  console.log('fetching')
      const result = await axios("https://jsonplaceholder.typicode.com/posts");

      dispatch({
          type: FETCH_POSTS,
          payload: result.data
      })
    };



