import { PRICE_FETCHED } from 'Actions/types';

const initialState = {
  deposit: '...',
  receive: '...',
  lastEdited: 'deposit',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PRICE_FETCHED:
      return { ...action.payload };
    default:
      return state;
  }
};
