import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { NavBar } from '../components/ui/NavBar';
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroeScreen from '../components/heroes/HeroeScreen';
import DcScreen from '../components/dc/DcScreen';

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/marvel/:heroId" component={HeroeScreen} />

          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/dc/:heroId" component={HeroeScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
