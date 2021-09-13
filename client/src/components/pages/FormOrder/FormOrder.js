import React from 'react';
import { Container, Row, Col, CardImg, Card, CardTitle, CardBody, CardSubtitle, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
import { calculateItemTotal, calculateTotal } from '../../utils/functions';

import styles from './FormOrder.module.scss';

const FormOrder = () => {

  const cart = JSON.parse(localStorage.getItem('cart'));

  return (
    <div>
      <Container className={styles.formContainer}>
        <p>Your order</p>
        <div className={styles.root} >
          {cart.map(item => (
            <Card className={styles.formCard} key={item.id}>
              <CardImg src={item.img} className={styles.image} />
              <CardBody>
                <CardTitle tag="h5">{item.title}</CardTitle>
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
              <Input type="text" name="text" placeholder="First name" />
              <Input type="text" name="text" placeholder="Last name" />
              <Input type="text" name="text" placeholder="Street" className={styles.street} />
              <Input type="text" name="text" placeholder="Number" className={styles.number} />
              <Input type="text" name="text" placeholder="ZIP code" className={styles.zip} />
              <Input type="text" name="text" placeholder="City" className={styles.city} />
              <Input type="text" name="text" placeholder="E-mail" />
              <Input type="text" name="text" placeholder="Phone number" />
            </FormGroup>
            <Button color="success">Submit</Button>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default FormOrder;