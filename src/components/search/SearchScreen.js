import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeroeCard from '../heroes/HeroeCard';
import useForm from '../../hook/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

const SearchScreen = ({ history }) => {
  // Location params
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  // Form
  const [formValue, handleInputChange] = useForm({
    findHero: q,
  });
  const { findHero } = formValue;

  // Selector
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const hanldeSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${findHero}`);
  };

  return (
    <div>
      <h1> Search Screen: </h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4> Search Form</h4>
          <form onSubmit={hanldeSubmit}>
            <input
              name="findHero"
              type="text"
              placeholder="Find your hero"
              className="form-control"
              value={findHero}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <button type="submit" className="btn btn-block btn-outline-primary">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === '' && <div className="alert alert-info">Search a hero !</div>}
          {q !== '' && heroesFiltered.length === 0 && (
            <div className="alert alert-danger">There is no hero with {q}</div>
          )}
          {heroesFiltered.map((heroe) => (
            <HeroeCard key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </div>
  );
};

SearchScreen.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SearchScreen;
