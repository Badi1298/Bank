import classes from '../../styles/AccountNavigation.module.css';

import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

import { authActions } from '../../store/auth';
import Modal from '../UI/Modal';
import TlcButton from '../UI/TlcButton';

function AccountNavigation(props) {
  // Data
  const [addMoney, setAddMoney] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const { isLoggedIn } = props;

  const userRef = useRef();
  const pinRef = useRef();
  const amountToAdd = useRef();

  // Methods
  const backHome = () => {
    router.replace('/');
  };

  const signout = () => {
    dispatch(authActions.logout());
    router.replace('/account');
  };

  const toggleAddMoney = () => {
    setAddMoney(prevState => (prevState = !prevState));
  };

  const login = async e => {
    e.preventDefault();

    const res = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA0-Nt2nWala7-ChK6KdUQr_GRL2qBSRmE',
      {
        method: 'POST',
        body: JSON.stringify({
          email: userRef.current.value,
          password: pinRef.current.value,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!res.ok) return;

    const data = await res.json();

    props.onGoToAccount(data);
  };

  const addMoneyHandler = e => {
    e.preventDefault();

    const amount = amountToAdd.current.value;

    if (amount > 100000) {
      alert('Not more than 100.000$');
      return;
    }

    props.onAddDeposit(amount);
    toggleAddMoney();
  };

  return (
    <div className={classes.login}>
      {!isLoggedIn && <h1>Log in to get started</h1>}
      {isLoggedIn && <h1>Welcome back!</h1>}
      <Image
        src="/logo-small.png"
        width="52.5"
        height="52.5"
        layout="fixed"
        onClick={backHome}
        style={{ cursor: 'pointer' }}
      />
      {!isLoggedIn && (
        <form onSubmit={login} className={classes.form}>
          <input type="text" placeholder="user" ref={userRef} />
          <input type="text" placeholder="PIN" ref={pinRef} />
          <button type="submit">→</button>
        </form>
      )}
      {isLoggedIn && (
        <div>
          <button className={classes.btn_add_money} onClick={toggleAddMoney}>
            Add Money
          </button>
          <button className={classes.signout} onClick={signout}>
            Signout
          </button>
        </div>
      )}
      {addMoney && (
        <Modal onClose={toggleAddMoney}>
          <div className={classes.add_money}>
            <h3>
              Add <span className={classes.title_highlight}>Money</span>
            </h3>
            <form onSubmit={addMoneyHandler}>
              <div>
                <input type="number" ref={amountToAdd}></input>
                <label>Amount</label>
              </div>
              <TlcButton type={'submit'} />
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default AccountNavigation;
