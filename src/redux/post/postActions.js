import axios from "axios";
import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
} from "./postTypes";

export const fetchPostsRequest = () => {
  console.log("start request");

  return {
    type: FETCH_POSTS_REQUEST,
  };
};

export const fetchPostsSuccess = (posts) => {
  console.log("success request");

  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const fetchPostsError = (error) => {
  return {
    type: FETCH_POSTS_ERROR,
    payload: error,
  };
};

export const fetchPosts = (number, url) => {
  return (dispatch) => {
    console.log("start");
    dispatch(fetchPostsRequest);
    axios
      .get(`https://jsonplaceholder.typicode.com/${url}/${number}`)
      .then((response) => {
        console.log("fetched");

        const posts = response.data;
        console.log(posts);
        dispatch(fetchPostsSuccess(posts));
      })
      .catch((error) => {
        console.log("error");

        const errorMsg = error.message;
        dispatch(fetchPostsError(errorMsg));
      });
  };
};
