import axios from 'axios';
import { API_URL } from '../config';

// SELECTORS 
export const getProducts = ({ products }) => products.data;

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* THUNKS */

export const loadProductsRequest = () => {
  return async dispatch => {
    try {
      let res = await axios.get(`${API_URL}/products`);
      dispatch(loadProducts(res.data));

    } catch(error) {
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
    case LOAD_PRODUCTS: 
      return { ...statePart, data: [...action.payload] };
    default:
      return statePart;
  }
}
