import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import products from './productsRedux';

// combine reducers
const rootReducer = combineReducers({
  products,
});

// devtools
const devtools = process.env.NODE_ENV === 'test'
  ? x => x
  : window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    devtools,
  )
);

export default store;