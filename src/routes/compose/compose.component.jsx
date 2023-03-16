import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPostDocument } from "../../utils/firebase/firebase.utils";

import "./compose.styles.scss";

const defaultFormFields = {
  title: "",
  body: "",
  image: "",
};

const Compose = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { title, body, image } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = (e) => {
    e.preventDefault();

    const postDocRef = createPostDocument(title, body, image);

    if (postDocRef) {
      resetFormFields();
      navigate("/");
    }
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
      <h1>Compose a new post!</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="title"
            value={title}
            required
          />
        </div>
        <div className="input-container">
          <label className="form-label">Body</label>
          <textarea
            className="form-control"
            onChange={handleChange}
            name="body"
            value={body}
            rows="20"
            required
          />
        </div>
        <div className="input-container">
          <label className="form-label">Image URL</label>
          <input
            type="url"
            className="form-control"
            onChange={handleChange}
            name="image"
            value={image}
            required
          />
        </div>
        <div className="button-container">
          <button type="submit" className="btn btn-primary">
            Publish
          </button>
        </div>
      </form>
    </main>
  );
};

export default Compose;
