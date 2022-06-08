import classes from '../../styles/AccountDetails.module.css';

import { Fragment, useState } from 'react';
import { MongoClient } from 'mongodb';

import AccountNavigation from '../../componenets/layout/AccountNavigation';
import AccountMovements from '../../componenets/main-page/account/AccountMovements';
import AccountTlc from '../../componenets/main-page/account/AccountTlc';

const interest = 156;

function UserAccount(props) {
  const [sortDescending, setSortDescending] = useState(false);

  const movementsAmounts = props.movementData.map(movement => movement.amount);

  const currentBalance = movementsAmounts.reduce(
    (acc, movement) => acc + movement,
    0
  );
  const inMovements = movementsAmounts
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const outMovements = movementsAmounts
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
    .toString()
    .slice(1);

  const sortedMovements = [...props.movementData];
  sortedMovements.sort((a, b) => b.amount - a.amount);
  const sortHandler = function () {
    setSortDescending(prevState => (prevState = !prevState));
  };

  let transactionNumber = 1;

  return (
    <Fragment>
      <AccountNavigation isLoggedIn={true} />
      <div className={classes.container}>
        <div className={classes.general_info}>
          <div>
            <h2>Current balance</h2>
            <p>As of 02/06/2022</p>
          </div>
          <h1>{currentBalance} USD($)</h1>
        </div>
        <div className={classes.inner_container}>
          <div className={classes.movements}>
            {!sortDescending
              ? props.movementData.map(movement => (
                  <AccountMovements
                    key={movement.id}
                    id={movement.id}
                    type={movement.type}
                    time={movement.time}
                    amount={movement.amount}
                    count={transactionNumber++}
                  />
                ))
              : sortedMovements.map(movement => (
                  <AccountMovements
                    key={movement.id}
                    id={movement.id}
                    type={movement.type}
                    time={movement.time}
                    amount={movement.amount}
                    count={transactionNumber++}
                  />
                ))}
          </div>
          <AccountTlc />
        </div>
        <div className={classes.bottom_info}>
          <div className={classes.balance_info}>
            <div className={classes.in_out_interest}>
              <div className={classes.balance}>
                <p>IN</p>
                <h4>{inMovements}$</h4>
              </div>
              <div className={`${classes.balance} ${classes.out}`}>
                <p>OUT</p>
                <h4>{outMovements}$</h4>
              </div>
              <div className={classes.balance}>
                <p>INTEREST</p>
                <h4>{interest}$</h4>
              </div>
            </div>
            <button onClick={sortHandler}>↓ SORT</button>
          </div>
          <p className={classes.logout}>
            You will be logget out in <span>05:00</span>
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://Badi:Noopgoogle123@cluster0.tgabpku.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const accountsCollection = db.collection('accounts');

  const accounts = await accountsCollection
    .find({}, { userId: 1, _id: 0 })
    .toArray();

  const uniqueAccounts = [...new Set(accounts)];

  client.close();

  return {
    paths: uniqueAccounts.map(account => ({
      params: { id: account.userId },
    })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const userId = context.params.id;

  const client = await MongoClient.connect(
    'mongodb+srv://Badi:Noopgoogle123@cluster0.tgabpku.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const accountsCollection = db.collection('accounts');

  const accounts = await accountsCollection.find({ userId: userId }).toArray();

  client.close();

  return {
    props: {
      movementData: accounts.map(account => ({
        id: account._id.toString(),
        type: account.type,
        amount: account.amount,
        time: account.time,
      })),
    },
    revalidate: 10,
  };
}

export default UserAccount;
