import classes from '../../../styles/AccountMovements.module.css';

function AccountMovements(props) {
  const { type, time, amount, count } = props;

  const typeClass =
    type === 'DEPOSIT'
      ? classes.deposit
      : type === 'WITHDRAWAL'
      ? classes.withdraw
      : classes.received;

  return (
    <div className={classes.movement}>
      <div className={classes.type_time}>
        <p className={typeClass}>
          {count} {type}
        </p>
        <p className={classes.time}>{time}</p>
      </div>
      <h3>{amount}$</h3>
    </div>
  );
}

export default AccountMovements;
