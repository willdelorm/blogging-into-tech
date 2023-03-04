import "./post-preview.styles.scss";

const PreviewPost = ({ post }) => {
  const { title, body, imageUrl, postedAt } = post;
  return (
    <div className="post-container">
      <img src={imageUrl} alt="" />
      <p className="date">{postedAt}</p>
      <p className="title">{title}</p>
      <p className="preview-text">{body}</p>
    </div>
  );
};

export default PreviewPost;
