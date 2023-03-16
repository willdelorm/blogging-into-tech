import { createContext, useState } from "react";

export const PostsContext = createContext({
  posts: [],
  setPosts: () => [],
});

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const value = { posts, setPosts };

  return (
    <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
  );
};
