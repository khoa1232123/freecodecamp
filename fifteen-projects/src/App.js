import {
  AccordionQuestion,
  BirthdayReminder,
  CocktailPage,
  ColorGenerator,
  CTAbout,
  CTError,
  Home,
  Reviewers,
  ReviewTours,
  SingleCocktail,
} from './pages';
import { CTNavbar } from './components';
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
        <Route>
          <div className="cocktailPage">
            <CTNavbar />
            <Switch>
              <Route path="/cocktail" exact component={CocktailPage} />
              <Route path="/cocktail/about" component={CTAbout} />
              <Route path="/cocktail/:id" exact component={SingleCocktail} />
              <Route path="/cocktail/*" component={CTError} />
            </Switch>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
