import classes from '../../../styles/OperationsInfo.module.css';
import { Fragment, useState } from 'react';

import OperationContent from './OperationContent';

function OperationsInfo() {
  const [type, setType] = useState('transfer');

  const typeTranfer = function () {
    setType('transfer');
  };

  const typeLoan = function () {
    setType('loan');
  };

  const typeClose = function () {
    setType('close');
  };

  return (
    <div className={classes['outer-container']}>
      <div className={classes.tabs}>
        <button
          className={`${classes.transfer} ${
            type === 'transfer' ? classes.active : ''
          }`}
          onClick={typeTranfer}
        >
          <span className={classes.number}>01</span> Instans transfer
        </button>
        <button
          className={`${classes.loan} ${type === 'loan' ? classes.active : ''}`}
          onClick={typeLoan}
        >
          <span className={classes.number}>02</span> Instans loans
        </button>
        <button
          className={`${classes.close} ${
            type === 'close' ? classes.active : ''
          }`}
          onClick={typeClose}
        >
          <span className={classes.number}>03</span> Instans closing
        </button>
      </div>
      {type === 'transfer' && (
        <OperationContent
          svg="/icons.svg#icon-upload"
          iconClass="icon1"
          title="Tranfser money to anyone, instantly! No fees, no BS."
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat."
        />
      )}
      {type === 'loan' && (
        <OperationContent
          svg="/icons.svg#icon-home"
          iconClass="icon2"
          title="Buy a home or make your dreams come true, with instant loans."
          description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      )}
      {type === 'close' && (
        <OperationContent
          svg="/icons.svg#icon-user-x"
          iconClass="icon3"
          title="No longer need your account? No problem! Close it instantly."
          description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      )}
    </div>
  );
}

export default OperationsInfo;
