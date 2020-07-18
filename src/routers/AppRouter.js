import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginScreen from '../components/login/loginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';

const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <PrivateRoute path="/" component={DashboardRoutes} isAuth={logged} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
