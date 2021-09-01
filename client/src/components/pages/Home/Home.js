import React from 'react';
import { Container, UncontrolledCarousel } from 'reactstrap';
import { items } from '../../layout/Carousel/items';
import Lineup from './../../features/Lineup/LineupContainer';

import styles from './Home.module.scss';

const Home = () => (
  <div>
    <Container>
      <UncontrolledCarousel items={items} className={styles.carousel} />
    </Container>
    <h1 className={styles.title}>Our products</h1>
    <Container>
      <Lineup />
    </Container>
  </div>
);

export default Home;