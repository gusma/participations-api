import axios from 'axios';
import React, { Suspense, useEffect, useState } from 'react';

import { ParticipationItem } from '../';
import {
  FlexContainer,
  NoParticipationsContainer,
  NoParticipationsTitle,
  THeadContainer,
  TableContainer,
} from './ParticipationList.styled';

const DonutChart = React.lazy(() => import('../DonutChart'));

const ParticipationList = () => {
  const [participations, setParticipations] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/participations/')
      .then(({ data }) => {
        setParticipations(data);
        console.log('The initial data is', data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    console.log('Participations value', participations);
    return participations.map((res, i) => {
      return <ParticipationItem obj={res} key={i} />;
    });
  };

  const itemLabels = participations.flatMap((o) => [
    o.firstName + ' ' + o.lastName,
  ]);

  const itemValues = participations.flatMap((o) => [o.participationPercentage]);

  const participationsAvailable =
    participations.length === 0 ? (
      <NoParticipationsContainer>
        <NoParticipationsTitle>
          Sorry! there are no participations at this given time.
        </NoParticipationsTitle>
      </NoParticipationsContainer>
    ) : (
      <>
        <FlexContainer>
          <TableContainer>
            <THeadContainer>
              <tr>
                <th className="md:mr-5 sm:text-center">First Name</th>
                <th className="md:mr-5 sm:text-center">Last Name</th>
                <th className="md:mr-10 sm:text-center">Participation %</th>
                <th></th>
              </tr>
            </THeadContainer>
            <tbody>{DataTable()}</tbody>
          </TableContainer>
        </FlexContainer>
        <FlexContainer>
          <Suspense fallback={<div>Loading</div>}>
            <DonutChart itemLabels={itemLabels} itemValues={itemValues} />
          </Suspense>
        </FlexContainer>
      </>
    );
  return (
    <div class="lg:mt-5 grid gap-20 auto-rows-fr grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
      {participationsAvailable}
    </div>
  );
};

export default ParticipationList;
