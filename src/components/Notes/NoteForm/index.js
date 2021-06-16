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
    props.addOrEdditNotes(formValues)
    setFormValues(initialStateValues)
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // const getNotes= async (id)=>{
  //   const doc= await (await db.collection('Notes').doc(id).get())
  //   setFormValues({...doc.data()})
  // }

    useEffect(()=>{
      console.log('id' + props.currentId)
      if(props.currentId===''){
        setFormValues(initialStateValues)
      }
      // else (
      //   setFormValues( props.currentId)
      // )
    }, [props.currentId])
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
          value={formValues.url}
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
          value={formValues.name}
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
          value={formValues.description}
        />
      </div>
      <button className="btn btn-primary btn-block">save</button>
    </form>
  );
};
