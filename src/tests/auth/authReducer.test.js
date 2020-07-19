import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('tests in authReducer', () => {
  const defaultState = {
    logged: false,
  };
  test('should return a default state ', () => {
    const state = authReducer(defaultState, {});
    expect(state).toEqual(defaultState);
  });

  test('should  of auth and put name a state', () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Jhon',
      },
    };
    const state = authReducer(defaultState, action);

    expect(state).toEqual({ logged: true, name: action.payload.name });
  });

  test('should delet name of user and logged in false', () => {
    const action = {
      type: types.logout,
    };

    const state = authReducer(defaultState, action);
    expect(state).toEqual({ logged: false });
  });
});
