import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import styles from './Products.module.scss';

const Products = ({ products }) => (
  <section className={styles.section}>
    {products.map(product =>
      <Card key={product._id} className={styles.card}><a href={`/product/${product._id}`}>
        <CardImg top width="100%" src={product.firstImage} alt="mugImg" className={styles.image} />
        <CardBody>
          <CardTitle tag="h4">{product.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Price: {products.price}$</CardSubtitle>
        </CardBody></a>
      </Card>
    )}
  </section>
);

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;