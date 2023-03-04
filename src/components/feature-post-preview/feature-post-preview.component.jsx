import "./feature-post-preview.styles.scss";

const FeaturePostPreview = ({ post }) => {
  const { title, body, imageUrl, postedAt } = post;
  return (
    <div className="feature-post-container">
      <div className="feature-image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="feature-text-container">
        <p className="date">{postedAt}</p>
        <p className="feature-title">{title}</p>
        <p className="preview-text">{body}</p>
      </div>
    </div>
  );
};

export default FeaturePostPreview;
