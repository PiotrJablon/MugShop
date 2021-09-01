import React from 'react';
import PropTypes from 'prop-types';

import Product from '../Product/Product';
import styles from './Products.module.scss';

const Products = ({ products }) => (
  <section className={styles.section}>
    {products.map(product => <Product key={product._id} {...product} />)}
  </section>
);

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;