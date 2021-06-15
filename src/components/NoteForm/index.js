import React, { useState } from 'react';

export const NoteForm = () => {
  const initialStateValues = {
    url: '',
    name: '',
    description: '',
  };

  const [formValues, setFormValues] = useState(initialStateValues);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(formValues)
    //Send to firebase
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="card-body card">
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">link</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="https://..."
          name="url"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="website-name"
          name="name"
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <textarea
          className="description"
          name="description"
          id=""
          className="form-control"
          placeholder="description"
          rows="3"
          onChange={handleInputChange}
        />
      </div>
      <button className="btn btn-primary btn-block">save</button>
    </form>
  );
};
