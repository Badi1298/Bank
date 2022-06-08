import classes from '../../../styles/AccountTlc.module.css';

import { Fragment } from 'react';

import TlcButton from '../../UI/TlcButton';

function AccountTlc() {
  return (
    <Fragment>
      <div className={classes.tlc}>
        <div className={classes.transfer}>
          <h3>Transfer Money</h3>
          <form>
            <div>
              <input type="text"></input>
              <label>Transfer To</label>
            </div>
            <div>
              <input type="number"></input>
              <label>Amount</label>
            </div>
            <TlcButton />
          </form>
        </div>
        <div className={classes.loan}>
          <h3>Request Loan</h3>
          <form>
            <div>
              <input type="number"></input>
              <label>Amount</label>
            </div>
            <TlcButton />
          </form>
        </div>
        <div className={classes.close}>
          <h3>Close Account</h3>
          <form>
            <div>
              <input type="text"></input>
              <label>Confirm User</label>
            </div>
            <div>
              <input type="number"></input>
              <label>Confirm PIN</label>
            </div>
            <TlcButton />
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default AccountTlc;
