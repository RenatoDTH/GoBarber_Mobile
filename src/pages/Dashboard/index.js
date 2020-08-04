import React, { useEffect, useState } from 'react';
import { withNavigationFocus } from '@react-navigation/compat';
import api from '~/services/api';
import Appointment from '~/pages/components/Appointment/index';
import Background from '~/pages/components/Background/index';
import { Container, Title, List } from './styles';

const Dashboard = ({ isFocused }) => {
  const [appointments, setAppointments] = useState();
  async function loadAppointments() {
    const response = await api.get('appointments');

    setAppointments(response.data);
  }

  useEffect(() => {
    if (isFocused) {
      loadAppointments();
    }
  }, [isFocused]);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map((appointment) =>
        appointment.id === id
          ? {
              ...appointment,
              canceled_at: response.data.canceled_at,
            }
          : appointment
      )
    );
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Appointment onCancel={() => handleCancel(item.id)} data={item} />
          )}
        />
      </Container>
    </Background>
  );
};

export default withNavigationFocus(Dashboard);
