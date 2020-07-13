import React from 'react';

const loginScreen = ({ history }) => {
  const handleSubmit = () => {
    // history.push('/');
    history.replace('/');
  };

  return (
    <div className="container mt-5">
      <h1>Login:</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

export default loginScreen;
