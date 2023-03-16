import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { PostsProvider } from "./contexts/posts.context";
import { UserProvider } from "./contexts/user.context";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PostsProvider>
          <App />
        </PostsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
