import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Register.module.css';
import Button from '../UI/Button/Button';

/**
 * REDUCERS
 */
const firstNameReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: /^[A-Za-z .]+$/.test(action.val.trim()),
    };
  }

  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: /^[A-Za-z .]+$/.test(state.value.trim()),
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const lastNameReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: /^[A-Za-z .]+$/.test(action.val.trim()),
    };
  }

  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: /^[A-Za-z .]+$/.test(state.value.trim()),
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const npiNumberReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: /^[0-9]+$/.test(action.val) && action.val.length === 10,
    };
  }

  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: /^[0-9]+$/.test(state.value) && state.value.length === 10,
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const businessAddressReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: /^[a-zA-Z0-9 ]+$/.test(action.val.trim()),
    };
  }

  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: /^[a-zA-Z0-9 ]+$/.test(state.value.trim()),
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const businessCityReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: /^[A-Za-z .]+$/.test(action.val.trim()),
    };
  }

  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: /^[A-Za-z .]+$/.test(state.value.trim()),
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const businessStateReducer = (state, action) => {
  const usStateNameRegex = new RegExp(
    '^(?:(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY]))$'
  );

  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: usStateNameRegex.test(action.val.trim()),
    };
  }

  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: usStateNameRegex.test(state.value.trim()),
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const businessPostalCodeReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      //prettier-ignore
      isValid: /^\d{5}(?:[-\s]\d{4})?$/.test(action.val),
    };
  }

  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      //prettier-ignore
      isValid: /^\d{5}(?:[-\s]\d{4})?$/.test(state.value),
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const telephoneReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: /^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/.test(action.val.trim()),
    };
  }

  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: /^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/.test(state.value.trim()),
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(action.val.trim()),
    };
  }

  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(state.value.trim()),
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  /**
   * REDUCER DEFINITIONS
   */
  const [firstNameState, dispatchFirstName] = useReducer(firstNameReducer, {
    value: '',
    isValid: null,
  });

  const [lastNameState, dispatchLastName] = useReducer(lastNameReducer, {
    value: '',
    isValid: null,
  });

  const [npiNumberState, dispatchNpiNumber] = useReducer(npiNumberReducer, {
    value: '',
    isValid: null,
  });

  const [businessAddressState, dispatchBusinessAddress] = useReducer(
    businessAddressReducer,
    {
      value: '',
      isValid: null,
    }
  );

  const [businessCityState, dispatchBusinessCity] = useReducer(
    businessCityReducer,
    {
      value: '',
      isValid: null,
    }
  );

  const [businessStateState, dispatchBusinessState] = useReducer(
    businessStateReducer,
    {
      value: '',
      isValid: null,
    }
  );

  const [businessPostalCodeState, dispatchBusinessPostalCode] = useReducer(
    businessPostalCodeReducer,
    {
      value: '',
      isValid: null,
    }
  );

  const [telephoneState, dispatchTelephone] = useReducer(telephoneReducer, {
    value: '',
    isValid: null,
  });

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  /**
   * EFFECTS
   */
  // Use only the isValid value so that the useEffect below runs only when the
  // validity changes and not on every state change. This is a small change but
  // helps to optimize the code since this useEffect is only needed when the state
  // of isValid changes.
  const { isValid: firstNameIsValid } = firstNameState;
  const { isValid: lastNameIsValid } = lastNameState;
  const { isValid: npiNumberIsValid } = npiNumberState;
  const { isValid: businessAddressIsValid } = businessAddressState;
  const { isValid: businessCityIsValid } = businessCityState;
  const { isValid: businessStateIsValid } = businessStateState;
  const { isValid: businessPostalCodeIsValid } = businessPostalCodeState;
  const { isValid: telephoneIsValid } = telephoneState;
  const { isValid: emailIsValid } = emailState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      // Do this in useEffect because it runs after the state change has occurred
      // in the component. This guarantees that the dependencies passed in below
      // are up to date from the useState or useReducer functions before this
      // tries to run.
      setFormIsValid(
        firstNameIsValid &&
          lastNameIsValid &&
          npiNumberIsValid &&
          businessAddressIsValid &&
          businessCityIsValid &&
          businessStateIsValid &&
          businessPostalCodeIsValid &&
          telephoneIsValid &&
          emailIsValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [
    firstNameIsValid,
    lastNameIsValid,
    npiNumberIsValid,
    businessAddressIsValid,
    businessCityIsValid,
    businessStateIsValid,
    businessPostalCodeIsValid,
    telephoneIsValid,
    emailIsValid,
  ]);

  /**
   * HANDLERS
   */
  const firstNameChangeHandler = (event) => {
    dispatchFirstName({
      type: 'USER_INPUT',
      val: event.target.value,
    });
  };

  const lastNameChangeHandler = (event) => {
    dispatchLastName({
      type: 'USER_INPUT',
      val: event.target.value,
    });
  };

  const npiNumberChangeHandler = (event) => {
    dispatchNpiNumber({
      type: 'USER_INPUT',
      val: event.target.value,
    });
  };

  const businessAddressChangeHandler = (event) => {
    dispatchBusinessAddress({
      type: 'USER_INPUT',
      val: event.target.value,
    });
  };

  const businessCityChangeHandler = (event) => {
    dispatchBusinessCity({
      type: 'USER_INPUT',
      val: event.target.value,
    });
  };

  const businessStateChangeHandler = (event) => {
    dispatchBusinessState({
      type: 'USER_INPUT',
      val: event.target.value,
    });
  };

  const businessPostalCodeChangeHandler = (event) => {
    dispatchBusinessPostalCode({
      type: 'USER_INPUT',
      val: event.target.value,
    });
  };

  const telephoneChangeHandler = (event) => {
    dispatchTelephone({
      type: 'USER_INPUT',
      val: event.target.value,
    });
  };

  const emailChangeHandler = (event) => {
    dispatchEmail({
      type: 'USER_INPUT',
      val: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onRegister(
      firstNameState.value,
      lastNameState.value,
      npiNumberState.value,
      businessAddressState.value,
      businessCityState.value,
      businessStateState.value,
      businessPostalCodeState.value,
      telephoneState.value,
      emailState.value
    );
  };

  /**
   * VALIDATORS
   */

  const validateFirstNameHandler = () => {
    dispatchFirstName({
      type: 'INPUT_BLUR',
    });
  };

  const validateLastNameHandler = () => {
    dispatchLastName({
      type: 'INPUT_BLUR',
    });
  };

  const validateNpiNumberHandler = () => {
    dispatchNpiNumber({
      type: 'INPUT_BLUR',
    });
  };

  const validateBusinessAddressHandler = () => {
    dispatchBusinessAddress({
      type: 'INPUT_BLUR',
    });
  };

  const validateBusinessCityHandler = () => {
    dispatchBusinessCity({
      type: 'INPUT_BLUR',
    });
  };

  const validateBusinessStateHandler = () => {
    dispatchBusinessState({
      type: 'INPUT_BLUR',
    });
  };

  const validateBusinessPostalCodeHandler = () => {
    dispatchBusinessPostalCode({
      type: 'INPUT_BLUR',
    });
  };

  const validateTelephoneHandler = () => {
    dispatchTelephone({
      type: 'INPUT_BLUR',
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_BLUR',
    });
  };

  return (
    <Card className={classes.register}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            firstNameState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstNameState.value}
            onChange={firstNameChangeHandler}
            onBlur={validateFirstNameHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            lastNameState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastNameState.value}
            onChange={lastNameChangeHandler}
            onBlur={validateLastNameHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            npiNumberState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="npiNumber">NPI Number</label>
          <input
            type="text"
            id="npiNumber"
            value={npiNumberState.value}
            onChange={npiNumberChangeHandler}
            onBlur={validateNpiNumberHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            businessAddressState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="businessAddress">Business Address</label>
          <input
            type="text"
            id="businessAddress"
            value={businessAddressState.value}
            onChange={businessAddressChangeHandler}
            onBlur={validateBusinessAddressHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            businessCityState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="businessCity">City</label>
          <input
            type="text"
            id="businessCity"
            value={businessCityState.value}
            onChange={businessCityChangeHandler}
            onBlur={validateBusinessCityHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            businessStateState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="businessState">State</label>
          <input
            type="text"
            id="businessState"
            value={businessStateState.value}
            onChange={businessStateChangeHandler}
            onBlur={validateBusinessStateHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            businessPostalCodeState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="businessPostalCode">Postal Code</label>
          <input
            type="text"
            id="businessPostalCode"
            value={businessPostalCodeState.value}
            onChange={businessPostalCodeChangeHandler}
            onBlur={validateBusinessPostalCodeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            telephoneState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="telephone">Telephone Number</label>
          <input
            type="tel"
            id="telephone"
            value={telephoneState.value}
            onChange={telephoneChangeHandler}
            onBlur={validateTelephoneHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
