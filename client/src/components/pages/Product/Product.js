import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {

  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct(this.props);
  }

  render() {

    const { product } = this.props;

    return (
      <>

      </>
    );
  }
}

Product.propTypes = {
  loadProduct: PropTypes.func,
  product: PropTypes.array,
  title: PropTypes.string,
};

export default Product;