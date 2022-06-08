import classes from '../../styles/Footer.module.css';

import { Fragment } from 'react';
import Image from 'next/image';

import Modal from '../UI/Modal';
import AccountForm from '../main-page/account/AccountForm';

function MainFooter(props) {
  return (
    <Fragment>
      <div className={classes.outer_container}>
        <div className={classes.footer_container}>
          <div className={classes.footer_info}>
            <h1>
              The best day to join Bankist was one day ago. The second best is
              today!
            </h1>
            <button onClick={props.onToggleAccountModal}>
              Open your free account today
            </button>
          </div>
          <ul className={classes.links}>
            <li>About</li>
            <li>Pricing</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <Image
            src="/icon.png"
            blurDataURL="/icon.png"
            placeholder="blur"
            width="50"
            height="50"
            layout="fixed"
          />
          <p>© Copyright by IDK, 2022, All Rights Reserved</p>
        </div>
      </div>
      {props.accountModalOpen && (
        <Modal onClose={props.onToggleAccountModal}>
          <AccountForm onClose={props.onToggleAccountModal} />
        </Modal>
      )}
    </Fragment>
  );
}

export default MainFooter;
