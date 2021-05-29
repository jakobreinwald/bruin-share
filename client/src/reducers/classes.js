import { FETCH_CLASSES } from '../constants/actionTypes';

const classActions = (classes = [], action) => {
  switch (action.type) {
    case FETCH_CLASSES:
      return action.payload;
    default:
      return classes;
  }
};

export default classActions;