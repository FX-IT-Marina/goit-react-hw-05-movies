import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, Navigation, Link, Main, Container } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </Navigation>
        </Container>
      </Header>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default Layout;
