import { useContext } from "react";

import PostPreview from "../../components/post-preview/post-preview.component";
import FeaturePostPreview from "../../components/feature-post-preview/feature-post-preview.component";

import "./home.styles.scss";
import { PostsContext } from "../../contexts/posts.context";

const Home = () => {
  const { posts } = useContext(PostsContext);

  return (
    <main className="home-container">
      <h1>Blogging Into Tech</h1>
      {posts.length ? <FeaturePostPreview post={posts[0]} /> : null}
      <div className="posts-container">
        {posts.slice(1, 6).map((post, index) => (
          <PostPreview key={index} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Home;
