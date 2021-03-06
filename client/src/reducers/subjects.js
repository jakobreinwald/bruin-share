import { FETCH_SUBJECTS } from '../constants/actionTypes';

const subjectActions = (subjects = [], action) => {
  switch (action.type) {
    case FETCH_SUBJECTS:
      return action.payload;
    default:
      return subjects;
  }
};

export default subjectActions;