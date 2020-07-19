import React from 'react';
import { mount } from 'enzyme';

import PrivateRoute from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Tests a component <PrivateRoute/>', () => {
  const props = {
    location: {
      pathname: 'DC',
    },
  };
  test('should show component if authenticated and save localStorange', () => {
    Storage.prototype.setItem = jest.fn();
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuth={true}
          component={() => <span>Ready !</span>}
          {...props}
        />
      </MemoryRouter>
    );
    expect(wrapper.find('span').exists()).toBe(true);

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lastPath',
      props.location.pathname
    );

    console.log(wrapper.html());
  });

  test('should lock component if not auth  ', () => {
    const wrapper = mount(
      <MemoryRouter>
        <PrivateRoute
          isAuth={false}
          component={() => <span>Ready !</span>}
          {...props}
        />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(false);
  });
});
