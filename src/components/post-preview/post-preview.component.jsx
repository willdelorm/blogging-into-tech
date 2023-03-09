import "./post-preview.styles.scss";

const PostPreview = ({ post }) => {
  const { title, body, imageUrl, postedAt } = post;

  return (
    <div className="post-container">
      <img src="https://picsum.photos/300/200" alt="" />
      <div className="text-container">
        <p className="date">{postedAt}</p>
        <p className="title">{title}</p>
        <p className="preview-text">{body.split(" ", 50).join(" ")}...</p>
      </div>
    </div>
  );
};

export default PostPreview;
