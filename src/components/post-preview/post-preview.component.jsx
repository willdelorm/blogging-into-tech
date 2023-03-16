import { useNavigate } from "react-router-dom";
import "./post-preview.styles.scss";

const PostPreview = ({ post }) => {
  const { title, body, imageUrl, postedAt } = post;
  const navigate = useNavigate();

  const route = title.split(" ").join("-").toLowerCase();

  const onNavigateHandler = () => navigate(`posts/${route}`);

  return (
    <div className="post-container" onClick={onNavigateHandler}>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="text-container">
        <p className="date">{postedAt}</p>
        <h2>{title}</h2>
        <p>{body.split(" ", 15).join(" ")}...</p>
        <div>
          <a href="/">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
