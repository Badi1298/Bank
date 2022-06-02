import classes from '../../styles/AccountDetails.module.css';

import { useRouter } from 'next/router';
import { Fragment } from 'react';
import AccountNavigation from '../../componenets/layout/AccountNavigation';
import AccountMovements from '../../componenets/main-page/account/AccountMovements';

const dummy_movements = [
  {
    id: '1',
    type: 'DEPOSIT',
    time: '3 days ago',
    amount: '10000$',
  },
  {
    id: '2',
    type: 'WITHDRAWAL',
    time: '2 days ago',
    amount: '-500$',
  },
];

function UserAccount() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <Fragment>
      <AccountNavigation isLoggedIn={true} />
      <div className={classes.container}>
        <div className={classes.general_info}>
          <div>
            <h2>Current balance</h2>
            <p>As of 02/06/2022</p>
          </div>
          <h1>14850 USD($)</h1>
        </div>
        <div className={classes.movements}>
          {dummy_movements.map(movement => (
            <AccountMovements
              key={movement.id}
              id={movement.id}
              type={movement.type}
              time={movement.time}
              amount={movement.amount}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default UserAccount;
