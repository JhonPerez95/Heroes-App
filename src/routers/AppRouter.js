import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import LoginScreen from '../components/login/loginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const {
    user: { logged },
  } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            exact
            path="/login"
            component={LoginScreen}
            isAuth={logged}
          />
          <PrivateRoute path="/" component={DashboardRoutes} isAuth={logged} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
