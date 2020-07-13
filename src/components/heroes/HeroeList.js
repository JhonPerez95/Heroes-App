import React from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';

const HeroeList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <ul>
      {heroes.map((item) => (
        <li key={item.id}>{item.superhero}</li>
      ))}
    </ul>
  );
};
export default HeroeList;
