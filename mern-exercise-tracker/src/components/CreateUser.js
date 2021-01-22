import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = (props) => {
  const [username, setUsername] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
    };
    console.log(user);
    axios
      .post('http://localhost:5000/users/add', user)
      .then((res) => console.log(res.data));
    setUsername('');
  };
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <h3>Create New User</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>User Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Create User"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
