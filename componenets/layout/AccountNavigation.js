import classes from '../../styles/AccountNavigation.module.css';

import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth';

function AccountNavigation(props) {
  const dispatch = useDispatch();

  const username = useSelector(state => state.auth.username);

  const userRef = useRef();
  const pinRef = useRef();

  const router = useRouter();

  const backHome = () => {
    router.push('/');
  };

  const signout = () => {
    dispatch(authActions.logout());
    router.push('/account');
  };

  const isLoggedIn = props.isLoggedIn;

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

  return (
    <div className={classes.login}>
      {!isLoggedIn && <h1>Log in to get started</h1>}
      {isLoggedIn && <h1>Welcome back, {username}</h1>}
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
        <button className={classes.signout} onClick={signout}>
          Signout
        </button>
      )}
    </div>
  );
}

export default AccountNavigation;
