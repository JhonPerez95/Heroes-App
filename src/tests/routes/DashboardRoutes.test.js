import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import DashboardRoutes from '../../routers/DashboardRoutes';
import { AuthContext } from '../../auth/AuthContext';

describe('Tests a component <DashboardRoutes/>', () => {
  const contexValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'Jhon',
    },
  };

  test('should show correctly', () => {
    const wrapper = mount(
      <MemoryRouter>
        <AuthContext.Provider value={contexValue}>
          <DashboardRoutes />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe(
      contexValue.user.name
    );
  });
});
