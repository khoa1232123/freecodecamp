import {
  AccordionQuestion,
  BirthdayReminder,
  ColorGenerator,
  Home,
  Reviewers,
  ReviewTours,
} from './pages';
import './scss/styles.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/birthday" component={BirthdayReminder} />
        <Route path="/tour" component={ReviewTours} />
        <Route path="/review" component={Reviewers} />
        <Route path="/accordion" component={AccordionQuestion} />
        <Route path="/colorgenerator" component={ColorGenerator} />
      </Switch>
    </Router>
  );
}

export default App;
