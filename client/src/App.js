import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/pages/Home/Home';
import Product from './components/pages/Product/ProductContainer';
import Cart from './components/pages/Cart/Cart';
import FormOrder from './components/pages/FormOrder/FormOrderContainer';

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product/:id" exact component={Product} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/formOrder" exact component={FormOrder} />
        </Switch>
      </MainLayout>
    );
  }

}

export default App;
