import { useRef, useEffect } from 'react';
import classes from '../../../styles/OperationsInfo.module.css';

import SectionTitle from '../../layout/SectionTitle';
import OperationsInfo from './OperationsInfo';

function Operations(props) {
  return (
    <section className={classes.section}>
      <div>
        <SectionTitle
          title="OPERATIONS"
          description="Everything as simple as possible."
        />
        <OperationsInfo />
      </div>
    </section>
  );
}

export default Operations;
