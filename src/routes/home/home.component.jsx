import { useEffect, useState } from "react";

import { getPostDocuments } from "../../utils/firebase/firebase.utils";

import PostPreview from "../../components/post-preview/post-preview.component";
import FeaturePostPreview from "../../components/feature-post-preview/feature-post-preview.component";

import "./home.styles.scss";

const Home = () => {
  const [postsMap, setPostsMap] = useState([]);

  useEffect(() => {
    const getPostsMap = async () => {
      const postDocumentsArray = await getPostDocuments();
      setPostsMap(postDocumentsArray);
    };
    getPostsMap();
  }, []);

  return (
    <main className="home-container">
      <h1>Blogging Into Tech</h1>
      {postsMap.length ? <FeaturePostPreview post={postsMap[0]} /> : null}
      <div className="posts-container">
        {postsMap.slice(1).map((post, index) => (
          <PostPreview key={index} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Home;
