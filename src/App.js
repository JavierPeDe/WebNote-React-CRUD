import React from 'react';
import { LinkForm } from './components/LinkForm/index';
import { Links } from './components/Links/index';
const App = () => {
  return (
    <div className="container p-4">
      <LinkForm />
      <Links />
    </div>
  );
};

export default App;
