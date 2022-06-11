import classes from '../../../styles/AccountTlc.module.css';

import { useRef } from 'react';

import TlcButton from '../../UI/TlcButton';

function AccountTlc(props) {
  // Data
  const transferToEmail = useRef();
  const transferAmount = useRef();
  const loanInputRef = useRef();

  // Methods
  const feedbackSpan = feedback => {
    return <span className={classes.transaction_feedback}>- {feedback}</span>;
  };

  const transactionFeedback = type => {
    if (type === 'transfer') {
      if (props.transactionInProgress) {
        return feedbackSpan('sending money...');
      }

      if (props.transactionSuccesful) {
        return feedbackSpan('transfer complete');
      }
    }

    if (type === 'loan') {
      if (props.loanInProgress) {
        return feedbackSpan('requesting loan');
      }

      if (props.loanSuccessful) {
        return feedbackSpan('loan approved');
      }
    }
  };

  const transferMoney = function (e) {
    e.preventDefault();

    const toEmail = transferToEmail.current.value;
    const amount = transferAmount.current.value;

    props.onTransferMoney(toEmail, amount);

    transferToEmail.current.value = null;
    transferAmount.current.value = null;
  };

  const loanMoney = function (e) {
    e.preventDefault();

    const loanAmount = loanInputRef.current.value;

    props.onLoanMoney(loanAmount);

    loanInputRef.current.value = null;
  };

  return (
    <div className={classes.tlc}>
      <div className={classes.transfer}>
        <h3>Transfer Money {transactionFeedback('transfer')}</h3>
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
        <h3>Request Loan {transactionFeedback('loan')}</h3>
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
