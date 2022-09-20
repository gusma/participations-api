import axios from 'axios';
import React, { useState } from 'react';

import { ParticipationForm } from '../';
import { FormContainer } from './NewParticipation.styled';

const NewParticipation = () => {
  const [formValues] = useState({
    firstName: '',
    lastName: '',
    participationPercentage: '',
  });
  const onSubmit = (participationData) => {
    axios
      .post(
        'http://localhost:4000/participations/create-participation',
        participationData,
      )
      .then((res) => {
        if (res.status === 200) {
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => console.log('Something went wrong', err));
  };

  return (
    <FormContainer>
      <ParticipationForm
        initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize>
        Add Participation
      </ParticipationForm>
    </FormContainer>
  );
};

// Export CreateStudent Component
export default NewParticipation;
