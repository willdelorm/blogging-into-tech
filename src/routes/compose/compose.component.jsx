import { useState } from "react";

const defaultFormFields = {
  title: "",
  body: "",
};

const Compose = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, body } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const [posts, setPosts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
      postedAt: new Date(),
    };

    setPosts([...posts, newPost]);
    resetFormFields();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <main className="compose-container">
      <h1>Compose</h1>
      <form onSubmit={handleSubmit}>
        <div className="title-container">
          <label className="form-label">Title</label>
          <input
            type="text"
            required
            className="form-control"
            onChange={handleChange}
            name="title"
            value={title}
          />
        </div>
        <div className="body-container">
          <label className="form-label">Body</label>
          <textarea
            required
            className="form-control"
            onChange={handleChange}
            name="body"
            value={body}
            rows="3"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Publish
        </button>
      </form>
    </main>
  );
};

export default Compose;
