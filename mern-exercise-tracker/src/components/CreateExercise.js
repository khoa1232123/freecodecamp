import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateExercise = (props) => {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getDataUsers = async () => {
      await axios.get('http://localhost:5000/users').then((res) => {
        if (res.data) {
          console.log(res.data[0].username);
          setUsers(res.data.map((user) => user.username));
          setUsername(res.data[0].username);
        }
      });
    };
    getDataUsers();
  }, []);

  useEffect(() => {
    if (users[0]) {
      setUsername(users[0].username);
    }
  }, [users]);

  const onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username,
      description,
      duration,
      date,
    };
    console.log(exercise);
    axios
      .post('http://localhost:5000/exercises/add', exercise)
      .then((res) => console.log(res.data));
    props.history.push('/');
  };
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-6">
        <h3>Create New Exercise Log</h3>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Username: </label>
            <select
              required
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            >
              {users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Description: </label>
            <input
              type="text"
              required
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Duration: </label>
            <input
              type="number"
              required
              className="form-control"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <DatePicker selected={date} onChange={(e) => setDate(e)} />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btn btn-primary"
              value="Create Exercise"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateExercise;
