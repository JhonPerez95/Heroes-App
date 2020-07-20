import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import '@testing-library/jest-dom';

import { NavBar } from '../../../components/ui/NavBar';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';

describe('Test a component <NavBar/>', () => {
  const contexValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'jhon',
    },
  };

  const historyMock = {
    replace: jest.fn(),
    listen: jest.fn(),
    location: {},
    createHref: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllMocks();
  });
  const wrapper = mount(
    <AuthContext.Provider value={contexValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <NavBar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe(
      contexValue.user.name
    );
  });

  test('should call  logout and use history ', () => {
    wrapper.find('button').prop('onClick')();
    expect(contexValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
    expect(historyMock.replace).toHaveBeenCalledWith('/login');
  });
});
