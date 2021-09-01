import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import styles from './Product.module.scss';

const Product = ({ price, title, firstImage, _id }) => (
  <Card className={styles.card}><a href={`/product/${_id}`}>
    <CardImg top width="100%" src={firstImage} alt="mugImg" className={styles.image} />
    <CardBody>
      <CardTitle tag="h4">{title}</CardTitle>
      <CardSubtitle tag="h6" className="mb-2 text-muted">Price: {price}$</CardSubtitle>
    </CardBody></a>
  </Card>
);

Product.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  firstImage: PropTypes.string,
  _id: PropTypes.string,
};

export default Product;