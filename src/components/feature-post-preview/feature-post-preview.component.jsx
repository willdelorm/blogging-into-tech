import { Link } from "react-router-dom";
import "./feature-post-preview.styles.scss";

const FeaturePostPreview = ({ post }) => {
  const { title, body, imageUrl, postedAt } = post;

  return (
    <div className="feature-post-container">
      <div
        className="image-container"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="text-container">
        <p className="date">{postedAt}</p>
        <h2>{title}</h2>
        <p>{body.split(" ", 15).join(" ")}...</p>
        <div>
          <Link to="/">Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturePostPreview;
