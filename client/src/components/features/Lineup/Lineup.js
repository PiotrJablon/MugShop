import React from 'react';
import PropTypes from 'prop-types';

import Products from '../Products/Products';

class Lineup extends React.Component {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {

    const { products } = this.props;

    return (
      <>
        <Products products={products} />
      </>
    );
  }
}

Lineup.propTypes = {
  loadProducts: PropTypes.func,
  products: PropTypes.array,
};

export default Lineup;