import React, { Suspense } from 'react';

import { HeaderContainer } from './Header.styled';

const NewParticipation = React.lazy(() => import('../NewParticipation'));

const Header = () => {
  return (
    <HeaderContainer>
      <Suspense fallback={<div>Loading</div>}>
        <NewParticipation />
      </Suspense>
    </HeaderContainer>
  );
};

export default Header;
