import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, CardImg, CardText, CardBody, CardSubtitle, Button } from 'reactstrap';
import { addToStorage } from '../../utils/functions';

import styles from './Product.module.scss';

class Product extends React.Component {
  constructor( props ) {
    super(props);

    this.state = {
      amount: 1,
    };
  }

  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct(this.props);
  }

  handleChange(event) {
    this.setState({
      amount: event.target.valueAsNumber,
    });
  }

  render() {

    const { product } = this.props;

    return (
      <div>
        <Container>
          {product.map((item, idx) => (
            <div key={idx} className={styles.root}>
              <Row>
                <Col xs="12" className={styles.title}><h1>{item.title}</h1></Col>
              </Row>
              <Row>
                <Col xl="8" lg="12" className={styles.bigImage}>
                  <CardImg top width="100%" src={item.firstImage} alt="mugImg" className={styles.bigImage} />
                </Col>
                <Col xl="4" lg="12" className={styles.description}>
                  <CardBody>
                    <Row>
                      <Col xl="12"><CardText>{item.description}</CardText></Col>
                    </Row>
                    <Row className={styles.row}>
                      <Col xl="12"><CardSubtitle>Price: {item.price}$</CardSubtitle></Col>
                    </Row>
                    <Row className={styles.row}>
                      <Col xs="6">
                        <input
                          id="amount"
                          type="number"
                          className={styles.input}
                          value={this.state.amount}
                          onChange={event => this.handleChange(event)}>
                        </input>
                      </Col>
                      <Col xs="6">
                        <Button color="primary" onClick={() => addToStorage({
                          id: item._id,
                          title: item.title,
                          price: item.price,
                          img: item.firstImage,
                          amount: this.state.amount,
                        })}>Add to cart</Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs="6">
                        <CardImg top width="100%" src={item.thirdImage} alt="mugImg" className={styles.smallImage} />
                      </Col>
                      <Col xs="6">
                        <CardImg top width="100%" src={item.secondImage} alt="mugImg" className={styles.smallImage} />
                      </Col>
                    </Row>
                  </CardBody>
                </Col>
              </Row>
            </div>
          ))}  
        </Container>
      </div>
    );
  }
}

Product.propTypes = {
  loadProduct: PropTypes.func,
  product: PropTypes.array,
  title: PropTypes.string,
};

export default Product;