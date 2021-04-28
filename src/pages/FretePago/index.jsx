import React, { useEffect } from 'react';

import cuck from '../../services/api';
import { Container } from './styles';

const Main = () => {
  async function getData() {
    const response = await cuck.get('/abaixo');
    console.log(response.data);
    return response;
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <h1>meu site</h1>
    </Container>
  );
};

export default Main;
