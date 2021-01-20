import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  CreateExercise,
  CreateUser,
  EditExercise,
  ExerciseList,
  Navbar,
} from './components';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/create" exact component={CreateExercise} />
        <Route path="/user" exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
