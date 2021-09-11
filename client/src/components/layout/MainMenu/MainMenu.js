import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Container  } from 'reactstrap';

import styles from './MainMenu.module.scss';

const MainMenu = () => (
  <div>
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand href="/" className={styles.title}>Mugshop</NavbarBrand>
        <Nav navbar className="ms-auto">
          <NavItem>
            <NavLink href="/cart" className="text-white">Cart</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/formOrder" className="text-white">Finish your order</NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  </div>
);

export default MainMenu;