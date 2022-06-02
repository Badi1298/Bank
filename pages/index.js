import { Fragment } from 'react';

import MainNavigation from '../componenets/layout/MainNavigation';
import Home from '../componenets/main-page/Home';
import Features from '../componenets/main-page/featured/Features';
import Operations from '../componenets/main-page/operations/Operations';
import Testimonials from '../componenets/main-page/testimonials/Testimonials';
import MainFooter from '../componenets/layout/MainFooter';

function HomePage() {
  return (
    <Fragment>
      <MainNavigation />
      <Home />
      <Features />
      <Operations />
      <Testimonials />
      <MainFooter />
    </Fragment>
  );
}

export default HomePage;
