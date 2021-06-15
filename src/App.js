import React from 'react';
import { NoteForm } from './components/NoteForm/index';
import { Notes } from './components/Notes/index';
const App = () => {
  return (
    <div className="container p-4">
      <NoteForm />
      <Notes />
    </div>
  );
};

export default App;
