import { useEffect, useState } from "react";

import { getPostDocuments } from "../../utils/firebase/firebase.utils";

import PostPreview from "../../components/post-preview/post-preview.component";

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
      <div className="posts-container">
        {postsMap.map((post, index) => (
          <PostPreview key={index} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Home;
