import React from 'react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';

import { AuthContext } from '../../../auth/AuthContext';
import LoginScreen from '../../../components/login/loginScreen';

describe('Tests a component <LoginScreen/>', () => {
  const history = {
    replace: jest.fn(),
  };

  const contexValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: 'jhon',
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contexValue}>
      <LoginScreen history={history} />
    </AuthContext.Provider>
  );
  test('should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
    console.log(wrapper);
  });

  test('should call dispatch', () => {
    wrapper.find('button').prop('onClick')();
    expect(contexValue.dispatch).toHaveBeenCalled();
  });
});
