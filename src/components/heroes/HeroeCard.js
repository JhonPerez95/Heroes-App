import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeroeCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card ms-3" style={{ maxWidth: 540 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            className="card-img-top"
            src={`../assets/heroes/${id}.jpg`}
            alt={superhero}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {alter_ego !== characters && (
              <p className="card-text">{characters}</p>
            )}
            <p className="card-text">
              <small className="text-muted"> {first_appearance}</small>
            </p>
            <Link to={`./heroe/${id}`}>Mas...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroeCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  publisher: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};

export default HeroeCard;
