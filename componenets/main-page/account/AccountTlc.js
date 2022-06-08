import classes from '../../../styles/AccountTlc.module.css';

import { Fragment, useRef } from 'react';

import TlcButton from '../../UI/TlcButton';

function AccountTlc(props) {
  const transferToEmail = useRef();
  const transferAmount = useRef();
  const loanInputRef = useRef();

  const transferMoney = function (e) {
    e.preventDefault();

    const toEmail = transferToEmail.current.value;
    const amount = transferAmount.current.value;

    props.onTransferMoney(toEmail, amount);
  };

  const loanMoney = function (e) {
    e.preventDefault();

    const loanAmount = loanInputRef.current.value;

    props.onLoanMoney(loanAmount);
  };

  return (
    <div className={classes.tlc}>
      <div className={classes.transfer}>
        <h3>Transfer Money</h3>
        <form onSubmit={transferMoney}>
          <div>
            <input type="text" ref={transferToEmail}></input>
            <label>Transfer To</label>
          </div>
          <div>
            <input type="number" ref={transferAmount}></input>
            <label>Amount</label>
          </div>
          <TlcButton />
        </form>
      </div>
      <div className={classes.loan}>
        <h3>Request Loan</h3>
        <form onSubmit={loanMoney}>
          <div>
            <input type="number" ref={loanInputRef}></input>
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
  );
}

export default AccountTlc;
