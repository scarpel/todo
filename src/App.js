import { Route, Switch } from 'react-router';
import Login from './containers/authentication/Login';
import LandingPage from './containers/layouts/LandingPage';
import AuthRoute from './containers/routes/AuthRouter';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <AuthRoute redirectTo="/login" />
      </Switch>
    </div>
  );
}

export default App;
