import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ExerciseItem = ({ item, deleteItem }) => {
  return (
    <tr>
      <td>{item.username}</td>
      <td>{item.description}</td>
      <td>{item.duration}</td>
      <td>{item.date.substring(0, 10)}</td>
      <td>
        <Link to={'/edit/' + item._id} className="btn btn-warning">
          Edit
        </Link>{' '}
        <button
          type="button"
          onClick={() => deleteItem(item._id)}
          className="btn btn-danger"
        >
          Del
        </button>
      </td>
    </tr>
  );
};

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:5000/exercises')
      .then((res) => setExercises(res.data))
      .catch((err) => console.log(err));
  }, []);

  const removeExercise = (id) => {
    axios
      .delete('http://localhost:5000/exercises/' + id)
      .then((res) => console.log(res.data));
    setExercises(exercises.filter((item) => item._id !== id));
  };

  const exerciseList = () => {
    return exercises.map((item) => (
      <ExerciseItem key={item._id} item={item} deleteItem={removeExercise} />
    ));
  };

  return (
    <div className="row">
      <div className="col-12">
        <h3>List Exercise</h3>
        <table className="table table-border border">
          <thead>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{exerciseList()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ExerciseList;
