import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Home, Login, Register } from './pages';
import { MenuBar } from './components';
import { Container } from 'semantic-ui-react';
import { AuthProvider } from './context/auth';
import { AuthRoute } from './utils';

function App() {
  return (
    <AuthProvider>
      <Router>
        <MenuBar />
        <Container>
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
