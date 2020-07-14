import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { NavBar } from '../components/ui/NavBar';
import MarvelScreen from '../components/marvel/MarvelScreen';
import HeroeScreen from '../components/heroes/HeroeScreen';
import DcScreen from '../components/dc/DcScreen';
import SearchScreen from '../components/search/SearchScreen';

const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-2">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DcScreen} />
          <Route exact path="/heroe/:heroId" component={HeroeScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
};

export default DashboardRoutes;
