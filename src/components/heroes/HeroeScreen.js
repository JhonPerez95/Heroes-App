import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroeById';
import { useMemo } from 'react';

const HeroeScreen = ({ history }) => {
  const { heroId } = useParams();

  // useMemo , memoriza la funcion y solo se ejecutara de nuevo si el id cambia
  const heroe = useMemo(() => getHeroesById(heroId), [heroId]);

  if (!heroe) {
    return <Redirect to="/" />;
  }
  const {
    id,
    superhero,
    alter_ego,
    publisher,
    first_appearance,
    characters,
  } = heroe;

  const hanldeSubmit = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  return (
    <div>
      <h1> Heroe Description:</h1>
      <hr />

      <div className="row mt-5">
        <div className="col-4">
          <img
            className="img-thumbnail animate__animated animate__bounceInLeft"
            src={`../assets/heroes/${id}.jpg`}
            alt={superhero}
          />
        </div>
        <div className="col-8">
          <h3>{superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego: </b>
              {alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b>
              {publisher}
            </li>
            <li className="list-group-item">
              <b>First Appearance: </b>
              {first_appearance}
            </li>
          </ul>
          <h5>Characters</h5>
          <p>{characters}</p>
          <button className="btn btn-outline-info" onClick={hanldeSubmit}>
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroeScreen;
