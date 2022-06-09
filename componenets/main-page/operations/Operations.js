import { useRef, useEffect } from 'react';
import classes from '../../../styles/OperationsInfo.module.css';

import SectionTitle from '../../layout/SectionTitle';
import OperationsInfo from './OperationsInfo';

function Operations(props) {
  const operations = useRef(null);

  useEffect(() => {
    props.onOperations(operations.current, 'operations');
  }, []);

  return (
    <section className={classes.section} ref={operations}>
      <SectionTitle
        title="OPERATIONS"
        description="Everything as simple as possible."
      />
      <OperationsInfo />
    </section>
  );
}

export default Operations;
