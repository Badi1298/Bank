import classes from '../../styles/Modal.module.css';
import { Fragment } from 'react';

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
}

function ModalWindow(props) {
  return <div className={classes.content}>{props.children}</div>;
}

function Modal(props) {
  return (
    <Fragment>
      <Backdrop onClose={props.onClose} />
      <ModalWindow>{props.children}</ModalWindow>
    </Fragment>
  );
}

export default Modal;
