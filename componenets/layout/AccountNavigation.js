import classes from '../../styles/AccountNavigation.module.css';
import Image from 'next/image';

import { useRouter } from 'next/router';

function AccountNavigation(props) {
  const router = useRouter();

  const signout = () => {
    router.push('/account');
  };

  const isLoggedIn = props.isLoggedIn;

  return (
    <div className={classes.login}>
      {!isLoggedIn && <h1>Log in to get started</h1>}
      {isLoggedIn && <h1>Welcome back, Serban</h1>}
      <Image src="/logo-small.png" width="52.5" height="52.5" layout="fixed" />
      {!isLoggedIn && (
        <form className={classes.form}>
          <input type="text" placeholder="user" />
          <input type="text" placeholder="PIN" />
          <button onClick={props.onGoToAccount}>→</button>
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
