import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container  } from 'reactstrap';

import styles from './MainMenu.module.scss';

const MainMenu = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/" className={styles.title}>Mugshop</NavbarBrand>
          <Nav navbar className="ms-auto">
            <NavItem>
              <NavLink href="/cart" className={styles.cart}>Cart</NavLink>
              {cart === null
                ? <span className={styles.cartLength}>0</span>
                : <span className={styles.cartLength}>{cart.length}</span>
              }
            </NavItem>
            <NavItem>
              <NavLink href="/formOrder" className={styles.order}>Finish your order</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default MainMenu;