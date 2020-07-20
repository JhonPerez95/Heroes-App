import React from 'react';
import '@testing-library/jest-dom';

import { mount } from 'enzyme';
import HeroeScreen from '../../../components/heroes/HeroeScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('tests to <HeroeScreen/>', () => {
  const history = {
    length: 10,
    push: jest.fn(),
    goBack: jest.fn(),
  };

  test('should component Redirec to if not exist params', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe']}>
        <HeroeScreen history={history} />
      </MemoryRouter>
    );
    expect(wrapper.find('Redirect').exists()).toBe(true);
  });

  test('should a hero if exist params', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route path="/heroe/:heroId" component={HeroeScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find('.row').exists()).toBe(true);
  });

  test('should return last screen with push ', () => {
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route
          path="/heroe/:heroId"
          component={() => <HeroeScreen history={history} />}
        />
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();
    expect(history.push).toBeCalledWith('/');
    expect(history.goBack).not.toBeCalled();
  });

  test('should return screen last ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/heroe/marvel-spider']}>
        <Route
          path="/heroe/:heroId"
          component={() => <HeroeScreen history={history} />}
        />
      </MemoryRouter>
    );
    wrapper.find('button').prop('onClick')();
    expect(history.goBack).toBeCalled();
    expect(history.push).not.toBeCalled();
  });
});
