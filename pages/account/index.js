import { useRouter } from 'next/router';

import AccountNavigation from '../../componenets/layout/AccountNavigation';

function Account() {
  const router = useRouter();

  const goToAccount = e => {
    e.preventDefault();
    router.push('/account/1');
  };

  return <AccountNavigation isLoggedIn={false} onGoToAccount={goToAccount} />;
}

export default Account;
