import { FETCH_QUARTERS, CLEAR_QUARTERS } from '../constants/actionTypes';

export default (quarters = [], action) => {
  switch (action.type) {
    case FETCH_QUARTERS:
        return action.payload;
    case CLEAR_QUARTERS:
        return [];
    default:
      return quarters;
  }
};