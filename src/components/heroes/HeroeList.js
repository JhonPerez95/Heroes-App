import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import HeroeCard from './HeroeCard';

const HeroeList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heroes.map((item) => (
        <HeroeCard key={item.id} {...item} />
      ))}
    </div>
  );
};
export default HeroeList;
