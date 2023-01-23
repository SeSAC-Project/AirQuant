import { Header, Footer, TopButton } from 'components';
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from 'utils';

const Root = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <TopButton />
    </>
  );
};

export default Root;
