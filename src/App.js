import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/navigation/navigation.component";
import { PostsContext } from "./contexts/posts.context";
import Compose from "./routes/compose/compose.component";
import Home from "./routes/home/home.component";
import Posts from "./routes/posts/posts.component";
import SignIn from "./routes/sign-in/sign-in.component";
import { getPostDocuments } from "./utils/firebase/firebase.utils";

const App = () => {
  const { setPosts } = useContext(PostsContext);

  useEffect(() => {
    const getPostsMap = async () => {
      const postDocumentsArray = await getPostDocuments();
      setPosts(postDocumentsArray);
    };
    getPostsMap();
  }, [setPosts]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="posts/*" element={<Posts />} />
        <Route path="compose" element={<Compose />} />
        <Route path="login" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
