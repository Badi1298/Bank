import classes from '../../../styles/AccountMovements.module.css';

function AccountMovements(props) {
  const { id, type, time, amount, count } = props;

  const typeClass = type === 'DEPOSIT' ? classes.deposit : classes.withdraw;

  return (
    <div className={classes.movement}>
      <div className={classes.type_time}>
        <span className={typeClass}>
          <p>
            {count} {type}
          </p>
        </span>
        <p className={classes.time}>{time}</p>
      </div>
      <h3>{amount}$</h3>
    </div>
  );
}

export default AccountMovements;
