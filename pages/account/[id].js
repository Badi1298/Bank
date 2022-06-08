import classes from '../../styles/AccountDetails.module.css';

import { Fragment, useEffect, useState } from 'react';
import { MongoClient } from 'mongodb';
import { useRouter } from 'next/router';

import AccountNavigation from '../../componenets/layout/AccountNavigation';
import AccountMovements from '../../componenets/main-page/account/AccountMovements';
import AccountTlc from '../../componenets/main-page/account/AccountTlc';
import AccountBottomInfo from '../../componenets/main-page/account/AccountBottomInfo';

function UserAccount(props) {
  // Data
  const [sortDescending, setSortDescending] = useState(false);
  const date = new Date();

  const router = useRouter();
  const userId = router.query.id;

  props.movementData.reverse();
  const movementsAmounts = props.movementData.map(movement => movement.amount);
  const currentBalance = movementsAmounts.reduce((acc, mov) => acc + mov, 0);
  const inMovements = movementsAmounts
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  const outMovements = movementsAmounts
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0)
    .toString()
    .slice(1);
  const sortedMovements = [...props.movementData].sort(
    (a, b) => b.amount - a.amount
  );

  let transactionNumber = 1;
  let token = null;

  // Methods
  useEffect(() => {
    token = localStorage.getItem('token');
  }, []);

  const refresh = () => {
    router.reload();
  };

  const sortHandler = function () {
    setSortDescending(prevState => (prevState = !prevState));
  };

  const getEmail = async function () {
    const res = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyA0-Nt2nWala7-ChK6KdUQr_GRL2qBSRmE',
      {
        method: 'POST',
        body: JSON.stringify({
          idToken: token,
        }),
      }
    );

    const data = await res.json();

    return data.users[0].email;
  };

  const addDeposit = async function (amount) {
    const email = await getEmail();

    const res = await fetch('/api/add-money', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        userId: userId,
        type: 'DEPOSIT',
        amount: Number(amount),
        time: 'Today',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    console.log(data);
  };

  const transferMoney = async function (toEmail, transferAmount) {
    const email = await getEmail();

    const res = await fetch('/api/transfer-money', {
      method: 'POST',
      body: JSON.stringify({
        fromEmail: email,
        fromUserId: userId,
        toEmail: toEmail,
        amount: Number(transferAmount),
        time: 'Today',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    console.log(data);
  };

  return (
    <Fragment>
      <AccountNavigation onAddDeposit={addDeposit} isLoggedIn={true} />
      <div className={classes.container}>
        <div className={classes.general_info}>
          <div>
            <h2>
              Current balance{' '}
              <button onClick={refresh} className={classes.refresh}>
                ⟳
              </button>
            </h2>
            <p>
              As of{' '}
              {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
            </p>
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
          <AccountTlc
            onTransferMoney={transferMoney}
            onLoanMoney={addDeposit}
          />
        </div>
        <AccountBottomInfo
          inMovements={inMovements}
          outMovements={outMovements}
          onSortHandler={sortHandler}
        />
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