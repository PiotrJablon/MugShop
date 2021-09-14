import axios from 'axios';
import { API_URL } from '../config';

// ACTION NAME CREATOR
const reducerName = 'orders';
const createActionName = name => `app/${reducerName}/${name}`;

const ADD_ORDER = createActionName('ADD_ORDER');

export const addOrder = payload => ({ payload, type: ADD_ORDER });

/* THUNKS */
export const addOrderRequest = (order) => {
  return async dispatch => {
    try {
      let res = await axios.post(`${API_URL}/formOrder`, order);
      dispatch(addOrder(res));
      localStorage.removeItem('cart');
      window.location.reload(true);

    } catch (error) {
      alert('Oops. You have to fill in all required fields!');
      console.log(error.message);
    }
  };
};

/* INITIAL STATE */
const initialState = {
  data: [],
};

/* REDUCER */
export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case ADD_ORDER:
      return { ...statePart, data: [...action.payload] };
    default:
      return statePart;
  }
}