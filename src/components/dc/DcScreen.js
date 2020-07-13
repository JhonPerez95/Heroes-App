import React from 'react';
import HeroeList from '../heroes/HeroeList';

const DcScreen = () => {
  return (
    <div>
      <h1> Dc Heroes:</h1>
      <hr />
      <HeroeList publisher="DC Comics" />
    </div>
  );
};

export default DcScreen;
