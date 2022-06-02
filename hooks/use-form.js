import { useState } from 'react';

const useForm = validateValue => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const valueIsInvalid = !valueIsValid && isFocused;

  const valueChangeHandler = e => {
    setEnteredValue(e.target.value);
  };

  const focusHandler = () => {
    setIsFocused(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsFocused(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    isInvalid: valueIsInvalid,
    valueChangeHandler,
    focusHandler,
    reset,
  };
};

export default useForm;
