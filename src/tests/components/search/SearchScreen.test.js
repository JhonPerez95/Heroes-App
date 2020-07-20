import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

import SearchScreen from '../../../components/search/SearchScreen';

describe('Test a component <SearchScreen/>', () => {
  test('should correctly the component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero !');
  });

  test('should show to batman and a input with valor of the query ', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('input').prop('value')).toBe('batman');
    expect(wrapper).toMatchSnapshot();
  });

  test('should show a error if not found a hero', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=batman12132']}>
        <Route path="/search" component={SearchScreen} />
      </MemoryRouter>
    );

    expect(wrapper.find('.alert-danger').exists()).toBe(true);
    expect(wrapper.find('.alert-info').exists()).toBe(false);
  });

  test('should called the push history', () => {
    const history = {
      push: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/search']}>
        <Route
          path="/search"
          component={() => <SearchScreen history={history} />}
        />
      </MemoryRouter>
    );

    wrapper.find('input').simulate('change', {
      target: {
        name: 'findHero',
        value: 'batman',
      },
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault() {},
    });

    expect(history.push).toHaveBeenCalledWith('?q=batman');
  });
});
