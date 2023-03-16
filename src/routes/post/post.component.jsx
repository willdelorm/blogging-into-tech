import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { PostsContext } from "../../contexts/posts.context";

const Post = () => {
  const { route } = useParams();
  const { posts } = useContext(PostsContext);

  return <div>Post</div>;
};

export default Post;
