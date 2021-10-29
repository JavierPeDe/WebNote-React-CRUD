import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';

export const NoteForm = (props) => {
  const initialStateValues = {
    url: '',
    name: '',
    description: '',
  };

  const [formValues, setFormValues] = useState(initialStateValues);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addOrEdditNotes(formValues);
    setFormValues(initialStateValues);
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const getNotes = async (id) => {
    const doc = await await db.collection('Notes').doc(id).get();
    setFormValues({ ...doc.data() });
  };

  useEffect(() => {
    if (props.currentId === '') {
      setFormValues(initialStateValues);
    } else getNotes(props.currentId);
  }, [props.currentId]); //eslint-disable-line

  return (
    <form onSubmit={handleSubmit} className="card-body card">
      <i
        role="button"
        onClick={() => props.resetEdit()}
        className={
          props.currentId === ''
            ? 'invisible'
            : 'visible material-icons text-warning'
        }
      >
        restore
      </i>
      <div className="form-group input-group m-1">
        <div className="input-group-text bg-light">
          <i className="material-icons">link</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="https://..."
          name="url"
          onChange={handleInputChange}
          value={formValues.url}
        />
      </div>
      <div className="form-group input-group m-1">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="website-name"
          name="name"
          onChange={handleInputChange}
          value={formValues.name}
        />
      </div>
      <div className="form-group m-1">
        <textarea
          className="description form-control"
          name="description"
          id=""
          placeholder="description"
          rows="3"
          onChange={handleInputChange}
          value={formValues.description}
        />
      </div>
      <button
        className={
          props.currentId === ''
            ? 'btn  btn-block btn-primary'
            : 'btn  btn-block btn-warning'
        }
      >
        {props.currentId === '' ? 'Save' : 'Edit'}
      </button>
    </form>
  );
};
