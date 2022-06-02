import classes from '../../../styles/OperationsInfo.module.css';

import SectionTitle from '../../layout/SectionTitle';
import OperationsInfo from './OperationsInfo';

function Operations() {
  return (
    <section className={classes.section}>
      <SectionTitle
        title="OPERATIONS"
        description="Everything as simple as possible."
      />
      <OperationsInfo />
    </section>
  );
}

export default Operations;
