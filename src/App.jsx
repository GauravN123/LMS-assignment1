// src/App.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <h1>Welcome to the Form App</h1>
      <Link to="/form">Go to Form</Link>
    </div>
  );
};

export default App;
