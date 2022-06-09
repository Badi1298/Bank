import classes from '../../styles/MainNavigation.module.css';

import { Fragment } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Modal from '../UI/Modal';
import AccountForm from '../main-page/account/AccountForm';

function MainNavigation(props) {
  const router = useRouter();

  const goToLogin = () => {
    router.push('/account');
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Image src="/logo.png" alt="Bankist" width="148.58" height="45" />
        </div>
        <ul className={classes.list}>
          <li>
            <button
              className={classes.list_btn}
              onClick={props.onScrollToFeatures}
            >
              Features
            </button>
          </li>
          <li>
            <button
              className={classes.list_btn}
              onClick={props.onScrollToOperations}
            >
              Operations
            </button>
          </li>
          <li>
            <button
              className={classes.list_btn}
              onClick={props.onScrollToTestimonials}
            >
              Testimonials
            </button>
          </li>
          <li>
            <button
              onClick={props.onToggleAccountModal}
              className={classes.account_button}
            >
              Open Account
            </button>
          </li>
          <li>
            <button onClick={goToLogin} className={classes.login}>
              →
            </button>
          </li>
        </ul>
      </header>
      {props.accountModalOpen && (
        <Modal onClose={props.onToggleAccountModal}>
          <AccountForm onClose={props.onToggleAccountModal} />
        </Modal>
      )}
    </Fragment>
  );
}

export default MainNavigation;
