import classes from '../../styles/MainNavigation.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';

import Modal from '../UI/Modal';
import AccountForm from '../main-page/account/AccountForm';

function MainNavigation() {
  const [accountModalOpen, setAccountModalOpen] = useState(false);

  const toggleAccountModal = () => {
    setAccountModalOpen(prevState => (prevState = !prevState));
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Image src="/logo.png" alt="Bankist" width="148.58" height="45" />
        </div>
        <ul className={classes.list}>
          <li>Features</li>
          <li>Operations</li>
          <li>Testimonials</li>
          <li>
            <button
              onClick={toggleAccountModal}
              className={classes.account_button}
            >
              Account
            </button>
          </li>
        </ul>
      </header>
      {accountModalOpen && (
        <Modal onClose={toggleAccountModal}>
          <AccountForm onClose={toggleAccountModal} />
        </Modal>
      )}
    </Fragment>
  );
}

export default MainNavigation;
