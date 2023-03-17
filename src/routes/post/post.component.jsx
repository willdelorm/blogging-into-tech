import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { PostsContext } from "../../contexts/posts.context";

import "./posts.styles.scss";

const Post = ({ post }) => {
  const { route } = useParams();
  const { posts } = useContext(PostsContext);

  return (
    <article className="article-container">
      <header className="article-hero">
        <div className="article-utility">
          <div className="article-timestamp">March 17, 2023</div>
        </div>
        <div className="article-headline">
          <h1>
            The Strongest Evidence Yet That an Animal Started the Pandemic
          </h1>
        </div>
        <div className="article-art">
          <img src="https://picsum.photos/1600/900" alt="" />
        </div>
      </header>
      <section className="article-body">
        <p className="article-body-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit eget
          gravida cum sociis natoque. Nulla facilisi nullam vehicula ipsum a
          arcu cursus vitae congue. Nam at lectus urna duis. In dictum non
          consectetur a erat nam. Vitae tempus quam pellentesque nec nam aliquam
          sem et tortor. Leo urna molestie at elementum. Sed odio morbi quis
          commodo odio. Tincidunt nunc pulvinar sapien et ligula. Quam quisque
          id diam vel quam. Mauris ultrices eros in cursus turpis massa
          tincidunt dui. Cursus eget nunc scelerisque viverra mauris in aliquam
          sem fringilla. Interdum velit euismod in pellentesque massa placerat.
          Interdum consectetur libero id faucibus nisl. Velit scelerisque in
          dictum non consectetur. Netus et malesuada fames ac turpis egestas.
        </p>
        <p className="article-body-paragraph">
          Ipsum dolor sit amet consectetur adipiscing. Purus semper eget duis at
          tellus at urna. Congue quisque egestas diam in arcu cursus euismod
          quis viverra. Blandit cursus risus at ultrices mi. Magna eget est
          lorem ipsum dolor sit amet consectetur adipiscing. Ullamcorper a lacus
          vestibulum sed arcu non. Varius vel pharetra vel turpis nunc eget
          lorem dolor sed. Augue interdum velit euismod in. Pellentesque massa
          placerat duis ultricies lacus sed. Pharetra convallis posuere morbi
          leo urna molestie at elementum eu. Sed nisi lacus sed viverra tellus
          in. Est ultricies integer quis auctor elit sed vulputate mi.
        </p>
        <p className="article-body-paragraph">
          Enim diam vulputate ut pharetra sit amet aliquam id. Nisi quis
          eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Justo
          donec enim diam vulputate. Eu facilisis sed odio morbi. Enim lobortis
          scelerisque fermentum dui faucibus in ornare quam. Egestas sed sed
          risus pretium quam. Ullamcorper morbi tincidunt ornare massa eget.
          Suspendisse faucibus interdum posuere lorem ipsum. Rhoncus urna neque
          viverra justo nec ultrices dui. Enim ut tellus elementum sagittis
          vitae et leo duis. Erat velit scelerisque in dictum non. Interdum
          varius sit amet mattis vulputate. Amet mauris commodo quis imperdiet.
          Nulla malesuada pellentesque elit eget gravida cum sociis. Vehicula
          ipsum a arcu cursus vitae. Interdum velit euismod in pellentesque. Vel
          orci porta non pulvinar neque laoreet suspendisse.
        </p>
      </section>
      <section className="article-well">
        <div className="article-bio">
          Will Delorm sit amet volutpat consequat mauris nunc. Amet porttitor
          eget dolor morbi non arcu risus. Egestas diam in arcu cursus euismod
          quis. Ac auctor augue mauris augue neque gravida. Pharetra convallis
          posuere morbi leo urna molestie.
        </div>
        <div className="article-bio-socials">
          <a href="#" className="article-bio-social-link">
            Github
          </a>
          <a href="#" className="article-bio-social-link">
            LinkedIn
          </a>
        </div>
      </section>
    </article>
  );
};

export default Post;
