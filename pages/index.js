import { Fragment, useState } from 'react';

import MainNavigation from '../componenets/layout/MainNavigation';
import Home from '../componenets/main-page/Home';
import Features from '../componenets/main-page/featured/Features';
import Operations from '../componenets/main-page/operations/Operations';
import Testimonials from '../componenets/main-page/testimonials/Testimonials';
import MainFooter from '../componenets/layout/MainFooter';

function HomePage() {
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const [features, setFeatures] = useState(null);
  const [operations, setOperations] = useState(null);
  const [testimonials, setTestimonials] = useState(null);

  const toggleAccountModal = () => {
    setAccountModalOpen(prevState => (prevState = !prevState));
  };

  const getScrollToRef = (ref, type) => {
    if (type === 'features') {
      setFeatures(ref);
    } else if (type === 'operations') {
      setOperations(ref);
    } else {
      setTestimonials(ref);
    }
  };

  const scrollToFeatures = () => {
    features.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOperations = () => {
    operations.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTestimonials = () => {
    testimonials.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Fragment>
      <MainNavigation
        onToggleAccountModal={toggleAccountModal}
        accountModalOpen={accountModalOpen}
        onScrollToFeatures={scrollToFeatures}
        onScrollToOperations={scrollToOperations}
        onScrollToTestimonials={scrollToTestimonials}
      />
      <Home />
      <Features onFeatures={getScrollToRef} />
      <Operations onOperations={getScrollToRef} />
      <Testimonials onTestimonials={getScrollToRef} />
      <MainFooter
        onToggleAccountModal={toggleAccountModal}
        accountModalOpen={accountModalOpen}
      />
    </Fragment>
  );
}

export default HomePage;
