import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../redux/post/postActions";

const PostContainer = (props) => {
  const [number, setNumber] = React.useState(1);
  const [url, setUrl] = React.useState("posts");
  const [value, setValue] = React.useState(
    localStorage.getItem("persistantState") || ""
  );
  return (
    <div>
      <button onClick={() => props.fetchPosts(number, url)}>Load</button>

      {props.postData.showResult ? (
        <p>{props.postData.posts.title}</p>
      ) : (
        <p>Bye</p>
      )}
      <p>local storage - {value}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    postData: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (number, url) => dispatch(fetchPosts(number, url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
