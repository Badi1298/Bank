import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth';

import AccountNavigation from '../../componenets/layout/AccountNavigation';
import { useRouter } from 'next/router';

function Account() {
  const dispatch = useDispatch();
  const router = useRouter();

  const goToAccount = data => {
    dispatch(
      authActions.login({
        token: data.idToken,
        userId: data.localId,
        username: data.email.slice(0, 2).toUpperCase(),
      })
    );

    router.push(`/account/${data.localId}`);
  };

  return <AccountNavigation isLoggedIn={false} onGoToAccount={goToAccount} />;
}

export default Account;
