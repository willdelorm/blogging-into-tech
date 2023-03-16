import React from "react";
import { Route, Routes } from "react-router-dom";

import PostHistory from "../post-history/post-history.component";
import Post from "../post/post.component";

const Posts = () => {
  return (
    <Routes>
      <Route index element={<PostHistory />} />
      <Route path=":route" element={<Post />} />
    </Routes>
  );
};

export default Posts;
