import FeaturePostPreview from "../../components/feature-post-preview/feature-post-preview.component";
import PreviewPost from "../../components/post-preview/post-preview.component";

import "./home.styles.scss";

const tempPosts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    body: "Eaque consectetur iure aut nemo exercitationem pariatur nostrum? Fugiat, officiis error laudantium magnam facere nobis molestiae rerum quibusdam numquam. Consectetur, fugiat. Repudiandae!",
    imageUrl: "https://picsum.photos/1500/1000",
    postedAt: "March 05, 2021",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    body: "Eaque consectetur iure aut nemo exercitationem pariatur nostrum? Fugiat, officiis error laudantium magnam facere nobis molestiae rerum quibusdam numquam. Consectetur, fugiat. Repudiandae!",
    imageUrl: "https://picsum.photos/1500/1000",
    postedAt: "March 05, 2021",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    body: "Eaque consectetur iure aut nemo exercitationem pariatur nostrum? Fugiat, officiis error laudantium magnam facere nobis molestiae rerum quibusdam numquam. Consectetur, fugiat. Repudiandae!",
    imageUrl: "https://picsum.photos/1500/1000",
    postedAt: "March 05, 2021",
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    body: "Eaque consectetur iure aut nemo exercitationem pariatur nostrum? Fugiat, officiis error laudantium magnam facere nobis molestiae rerum quibusdam numquam. Consectetur, fugiat. Repudiandae!",
    imageUrl: "https://picsum.photos/1500/1000",
    postedAt: "March 05, 2021",
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    body: "Eaque consectetur iure aut nemo exercitationem pariatur nostrum? Fugiat, officiis error laudantium magnam facere nobis molestiae rerum quibusdam numquam. Consectetur, fugiat. Repudiandae!",
    imageUrl: "https://picsum.photos/1500/1000",
    postedAt: "March 05, 2021",
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    body: "Eaque consectetur iure aut nemo exercitationem pariatur nostrum? Fugiat, officiis error laudantium magnam facere nobis molestiae rerum quibusdam numquam. Consectetur, fugiat. Repudiandae!",
    imageUrl: "https://picsum.photos/1500/1000",
    postedAt: "March 05, 2021",
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    body: "Eaque consectetur iure aut nemo exercitationem pariatur nostrum? Fugiat, officiis error laudantium magnam facere nobis molestiae rerum quibusdam numquam. Consectetur, fugiat. Repudiandae!",
    imageUrl: "https://picsum.photos/1500/1000",
    postedAt: "March 05, 2021",
  },
];
const featurePost = tempPosts[0];
const pastPosts = [];
for (let i = 1; i < tempPosts.length; i++) {
  pastPosts.push(tempPosts[i]);
}

const Home = () => {
  return (
    <main className="home-container">
      <h1>Blogging Into Tech</h1>
      <FeaturePostPreview post={featurePost} />
      <div className="posts-container">
        {pastPosts.map((post) => (
          <PreviewPost key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
};

export default Home;
