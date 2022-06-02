import classes from '../../../styles/Account.module.css';
import Link from 'next/link';
import { Fragment } from 'react';
import useForm from '../../../hooks/use-form';

const notEmpty = value => value.trim() !== '';
const notEmptyAnd4Digit = value => value.trim() !== '' && value.length === 4;

function AccountForm(props) {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    isInvalid: firstNameIsInvalid,
    valueChangeHandler: firstNameChangeHandler,
    focusHandler: focusFirstName,
  } = useForm(notEmpty);

  const {
    value: enteredLastName,
    isValid: lastNameIsValid,
    isInvalid: lastNameIsInvalid,
    valueChangeHandler: lastNameChangeHandler,
    focusHandler: focusLastName,
  } = useForm(notEmpty);

  const {
    value: enteredPin,
    isValid: pinIsValid,
    isInvalid: pinIsInvalid,
    valueChangeHandler: pinChangeHandler,
    focusHandler: focusPin,
  } = useForm(notEmptyAnd4Digit);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && pinIsValid) {
    formIsValid = true;
  }

  const submitForm = e => {
    e.preventDefault();

    if (!formIsValid) return;

    const account = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      pin: enteredPin,
    };

    props.onClose();
  };

  const firstNameClasses = firstNameIsInvalid
    ? `${classes.form_control} ${classes.invalid}`
    : classes.form_control;

  const lastNameClasses = lastNameIsInvalid
    ? `${classes.form_control} ${classes.invalid}`
    : classes.form_control;

  const pinClasses = pinIsInvalid
    ? `${classes.form_control} ${classes.invalid}`
    : classes.form_control;

  return (
    <Fragment>
      <h1 className={classes.modal_title}>
        Open your bank account in just{' '}
        <span className={classes.highlight}>5 minutes</span>
      </h1>
      <form onSubmit={submitForm} className={classes.form}>
        <div className={classes.control_group}>
          <div className={firstNameClasses}>
            <label htmlFor="first-name">First Name*</label>
            <input
              id="first-name"
              type="text"
              placeholder="First Name"
              value={enteredFirstName}
              onChange={firstNameChangeHandler}
              onBlur={focusFirstName}
              className={firstNameClasses}
            />
            {firstNameIsInvalid && (
              <p className={classes.error_text}>First Name can not be empty!</p>
            )}
          </div>
          <div className={lastNameClasses}>
            <label htmlFor="last-name">Last Name*</label>
            <input
              id="last-name"
              type="text"
              placeholder="Last Name"
              value={enteredLastName}
              onChange={lastNameChangeHandler}
              onBlur={focusLastName}
              className={lastNameClasses}
            />
            {lastNameIsInvalid && (
              <p className={classes.error_text}>Last Name can not be empty!</p>
            )}
          </div>
          <div className={pinClasses}>
            <label htmlFor="pin">PIN*</label>
            <input
              id="pin"
              type="text"
              placeholder="4 digit PIN"
              value={enteredPin}
              onChange={pinChangeHandler}
              onBlur={focusPin}
              className={pinClasses}
            />
            {pinIsInvalid && (
              <p className={classes.error_text}>
                PIN has to have exacly 4 digits!
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={!formIsValid}
            className={`${classes.account_button} ${classes.next_step}`}
          >
            Create Account →
          </button>
        </div>
      </form>
      <button onClick={props.onClose} className={classes.close_modal}>
        ×
      </button>
      <p className={classes.para}>
        Already have an account? <Link href="/account">Click here</Link>{' '}
        instead.
      </p>
    </Fragment>
  );
}

export default AccountForm;
