import classes from '../../../styles/AccountBottomInfo.module.css';

const interest = 100;

function AccountBottomInfo(props) {
  return (
    <div className={classes.bottom_info}>
      <div className={classes.balance_info}>
        <div className={classes.in_out_interest}>
          <div className={classes.balance}>
            <p>IN</p>
            <h4>{props.inMovements}$</h4>
          </div>
          <div className={`${classes.balance} ${classes.out}`}>
            <p>OUT</p>
            <h4>{props.outMovements}$</h4>
          </div>
          <div className={classes.balance}>
            <p>INTEREST</p>
            <h4>{interest}$</h4>
          </div>
        </div>
        <button onClick={props.onSortHandler}>↓ SORT</button>
      </div>
      <p className={classes.logout}>
        You will be logget out in <span>05:00</span>
      </p>
    </div>
  );
}

export default AccountBottomInfo;
