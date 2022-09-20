import axios from 'axios';

import { TDContainer, TRContainer } from './ParticipationItem.styled';

const ParticipationItem = (props) => {
  const { _id, firstName, lastName, participationPercentage } = props.obj;

  const deleteParticipation = () => {
    axios
      .delete(
        'http://localhost:4000/participations/delete-participation/' + _id,
      )
      .then((res) => {
        if (res.status === 200) {
          alert('Participation successfully deleted');
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert('Something went wrong', err));
  };

  return (
    <TRContainer>
      <TDContainer>{firstName}</TDContainer>
      <TDContainer>{lastName}</TDContainer>
      <TDContainer>{participationPercentage}</TDContainer>
      <td>
        <button onClick={deleteParticipation}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6">
            <path
              fill="#F00"
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </td>
    </TRContainer>
  );
};

export default ParticipationItem;
