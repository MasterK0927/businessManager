import { FETCH_EMPLOYEES, FETCH_EMPLOYEES_FAIL } from '../actions/types';

const initialState = { employees: [] };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_EMPLOYEES:
      return {
        ...state,
        employees: payload.employees,
      };
    case FETCH_EMPLOYEES_FAIL:
      return {
        ...state,
        employees: [],
      };
    default:
      return state;
  }
}
