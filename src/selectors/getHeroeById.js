import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};
