import React from 'react';
import { CardImg, Container, Button, Row, Col } from 'reactstrap';
import { addAmount, removeAmount, calculateItemTotal, removeItem, calculateTotal } from '../../utils/functions';

import styles from './Cart.module.scss';

class Cart extends React.Component {

  render() {
    const cart = JSON.parse(localStorage.getItem('cart'));

    return (
      <Container>
        {cart === null
          ? <div className={styles.cartEmpty}>
            <span>The cart is empty</span>
          </div>
          : <div className={styles.cartContainer}>
            <div className={styles.cartHeader}>
              <div className={styles.productName}>Product name</div>
              <div>Price</div>
              <div>Amount</div>
              <div className={styles.productDescription}>Description</div>
              <div>Total</div>
              <div>Remove</div>
            </div>
            {cart.map((item, idx) => (
              <div key={idx} className={styles.cartProduct}>
                <div className={styles.productName}>
                  <CardImg src={item.img} className={styles.image} />
                  <h4>{item.title}</h4>
                </div>
                <div>{item.price} $</div>
                <div className={styles.cartAmount}>
                  <span className={styles.amountButton} onClick={() => removeAmount(item.id)}>-</span>
                  <div className={styles.amount}>{item.amount}</div>
                  <span className={styles.amountButton} onClick={() => addAmount(item.id)}>+</span>
                </div>
                <div className={styles.productDescription}>
                  <input type="text-area" placeholder="Aditional info" />
                </div>
                <div>{calculateItemTotal(item.price, item.amount)} $</div>
                <div>
                  <Button onClick={() => removeItem(item.id)} color="danger">Remove</Button>
                </div>
              </div>
            ))}
            <Row className={styles.row}>
              <Col xs="2">
                <span className={styles.total}>Cart value </span>
              </Col>
              <Col xs="2">
                <span className={styles.price}>{calculateTotal(cart)} $</span>
              </Col>
            </Row>
            <Row className={styles.rowButton}>
              <Col xs="3">
                <Button color="success" href="/formOrder">Finish your order here</Button>
              </Col>
            </Row>
          </div>
        }
      </Container>
    );
  }
}

export default Cart;