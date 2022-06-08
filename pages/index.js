import { Fragment, useState } from 'react';

import MainNavigation from '../componenets/layout/MainNavigation';
import Home from '../componenets/main-page/Home';
import Features from '../componenets/main-page/featured/Features';
import Operations from '../componenets/main-page/operations/Operations';
import Testimonials from '../componenets/main-page/testimonials/Testimonials';
import MainFooter from '../componenets/layout/MainFooter';

function HomePage() {
  const [accountModalOpen, setAccountModalOpen] = useState(false);

  const toggleAccountModal = () => {
    setAccountModalOpen(prevState => (prevState = !prevState));
  };

  return (
    <Fragment>
      <MainNavigation
        onToggleAccountModal={toggleAccountModal}
        accountModalOpen={accountModalOpen}
      />
      <Home />
      <Features />
      <Operations />
      <Testimonials />
      <MainFooter
        onToggleAccountModal={toggleAccountModal}
        accountModalOpen={accountModalOpen}
      />
    </Fragment>
  );
}

export default HomePage;
