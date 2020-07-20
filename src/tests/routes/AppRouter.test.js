import React from 'react';
import { mount } from 'enzyme';

import AppRouter from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Test a Component <AppRouter/>', () => {
  const contexValue = {
    dispatch: jest.fn(),
    user: {
      logged: false,
    },
  };
  test('should show login if not auth', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contexValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    console.log(wrapper.html());
    expect(wrapper).toMatchSnapshot();
  });

  test('should not login if auth', () => {
    const contexValue = {
      dispatch: jest.fn(),
      user: {
        name: 'jhon',
        logged: false,
      },
    };
    const wrapper = mount(
      <AuthContext.Provider value={contexValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.navbar').exists()).toBe(false);
  });
});
