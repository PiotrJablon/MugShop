import axios from 'axios';
import { API_URL } from '../config';

// SELECTORS 
export const getProducts = ({ products }) => products.data;
export const getProductById = ({ products }, productId) => {
  const data = products.data;
  const filtered = data.filter((product) => product._id === productId);
  return filtered.length ? filtered : [{ error: true }];
};

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');
const LOAD_PRODUCT_BYID = createActionName('LOAD_PRODUCT_BYID');

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });
export const loadProduct = payload => ({ payload, type: LOAD_PRODUCT_BYID });

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

export const loadProductRequest = (props) => {
  return async dispatch => {
    try {
      let res = await axios.get(`${API_URL}/product/${props.match.params.id}`);
      dispatch(loadProduct(res.data));

    } catch (error) {
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
    case LOAD_PRODUCT_BYID:
      return { ...statePart, data: [{...action.payload}] };
    default:
      return statePart;
  }
}
