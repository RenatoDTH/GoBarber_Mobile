import React from 'react';

import Appointment from '~/pages/components/Appointment/index';
import Background from '~/pages/components/Background/index';
import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5];

const Dashboard = () => {
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
};

export default Dashboard;
