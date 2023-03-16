import React, { useContext } from "react";

import { PostsContext } from "../../contexts/posts.context";

import PostPreview from "../../components/post-preview/post-preview.component";

const PostHistory = () => {
  const { posts } = useContext(PostsContext);

  return (
    <main className="home-container">
      <h1>Blogging Into Tech</h1>
      <div className="posts-container">
        {posts.map((post, index) => (
          <PostPreview key={index} post={post} />
        ))}
      </div>
    </main>
  );
};

export default PostHistory;
