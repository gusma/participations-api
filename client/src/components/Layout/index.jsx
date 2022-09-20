import { Footer, Header } from '../';
import { LayoutContainer, MainContainer, MainWrapper } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <>
      <LayoutContainer>
        <Header />
        <MainContainer>
          <MainWrapper>{children}</MainWrapper>
        </MainContainer>
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default Layout;
