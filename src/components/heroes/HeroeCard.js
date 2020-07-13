import React from 'react';
import PropTypes from 'prop-types';

const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card" width="18rem;">
      <img className="card-img-top" src="..." alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{superhero}</h5>
        <p className="card-text">{characters}</p>
        <a href="#" className="btn btn-primary">
          {alter_ego}
        </a>
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
