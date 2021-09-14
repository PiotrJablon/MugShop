import React from 'react';
import PropTypes from 'prop-types';
import { Container, CardImg, Card, CardTitle, CardBody, CardSubtitle, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { calculateItemTotal, calculateTotal } from '../../utils/functions';

import styles from './FormOrder.module.scss';

class FormOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      street: '',
      number: '',
      ZIPCode: '',
      city: '',
      Email: '',
      phoneNumber: '',
    };
  }

  handleChange(event) {
    if (event.target.name === 'number' || event.target.name === 'phoneNumber') {
      this.setState({
        ...this.state,
        [event.target.name]: event.target.valueAsNumber,
      });
    } else {
      this.setState({
        ...this.state,
        [event.target.name]: event.target.value,
      });
    }
  }

  render () {
    const cart = JSON.parse(localStorage.getItem('cart'));
    
    return (
      <div>
        <Container className={styles.formContainer}>
          <p>Your order</p>
          {cart === null
            ? <div className={styles.cartEmpty}>
              <span>The cart is empty</span>
            </div>
            : <div className={styles.root}>
              {cart.map(item => (
                <Card className={styles.formCard} key={item.id}>
                  <CardImg src={item.img} className={styles.image} />
                  <CardBody>
                    <CardTitle tag="h5">{item.title} x {item.amount}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{calculateItemTotal(item.price, item.amount)} $</CardSubtitle>
                  </CardBody>
                </Card>
              ))}
              <div className={styles.formTotal}>
                <h5>Total {calculateTotal(cart)} $</h5>
              </div>
              <Form>
                <Label>Delivery address</Label>
                <FormGroup className={styles.form}>
                  <Input type="text" name="firstName" placeholder="First name" value={this.state.firstName} onChange={event => this.handleChange(event)} />
                  <Input type="text" name="lastName" placeholder="Last name" value={this.state.lastName} onChange={event => this.handleChange(event)} />
                  <Input type="text" name="street" placeholder="Street" className={styles.street} value={this.state.street} onChange={event => this.handleChange(event)} />
                  <Input type="number" name="number" placeholder="Number" className={styles.number} value={this.state.number} onChange={event => this.handleChange(event)} />
                  <Input type="text" name="ZIPCode" placeholder="ZIP code" className={styles.zip} value={this.state.ZIPCode} onChange={event => this.handleChange(event)} />
                  <Input type="text" name="city" placeholder="City" className={styles.city} value={this.state.city} onChange={event => this.handleChange(event)} />
                  <Input type="text" name="Email" placeholder="E-mail" value={this.state.Email} onChange={event => this.handleChange(event)} />
                  <Input type="number" name="phoneNumber" placeholder="Phone number" value={this.state.phoneNumber} onChange={event => this.handleChange(event)} />
                </FormGroup>
                <Button onClick={() => this.props.addOrder({
                  firstName: this.state.firstName,
                  lastName: this.state.lastName,
                  street: this.state.street,
                  number: this.state.number,
                  ZIPCode: this.state.ZIPCode,
                  City: this.state.city,
                  Email: this.state.Email,
                  phoneNumber: this.state.phoneNumber,
                  products: cart,
                  cost: calculateTotal(cart),
                })} color="success">Submit</Button>
              </Form>
            </div>
          }
        </Container>
      </div>
    );
  }
}

FormOrder.propTypes = {
  addOrder: PropTypes.func,
};

export default FormOrder;