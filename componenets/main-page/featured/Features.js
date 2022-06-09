import classes from '../../../styles/Features.module.css';

import SectionTitle from '../../layout/SectionTitle';
import InfoRight from './InfoRight';
import InfoLeft from './InfoLeft';
import { useEffect, useRef } from 'react';

function Features(props) {
  return (
    <section className={classes.section}>
      <SectionTitle
        title="FEATURES"
        description="Everything you need in a modern bank and more."
      />
      <div className={classes.info}>
        <InfoRight
          src="/digital.jpg"
          svg="/icons.svg#icon-monitor"
          title="100% Digital Bank"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus."
        />
        <InfoLeft
          src="/grow.jpg"
          svg="/icons.svg#icon-trending-up"
          title="Watch your money grow"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            vulputate vulputate diam, porta egestas neque rutrum nec. Proin quam
            odio, consequat vitae scelerisque vel, commodo sed augue. Vestibulum
            placerat sem mi, eu scelerisque justo interdum vel."
        />
        <InfoRight
          src="/card.jpg"
          svg="/icons.svg#icon-credit-card"
          title="Free debit card included"
          description="Vivamus finibus at sem nec vestibulum. Morbi aliquam ultrices
          efficitur. Duis tincidunt facilisis risus non auctor. Pellentesque
          vulputate lectus quis tortor tincidunt pharetra."
        />
      </div>
    </section>
  );
}

export default Features;
