import React, { useState, useEffect } from 'react';

import Register from './components/Register/Register';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [registrationInformation, setRegistrationInformation] = useState([]);

  useEffect(() => {
    const storedUserRegistrationInformation =
      localStorage.getItem('isRegistered');

    if (storedUserRegistrationInformation === '1') {
      setIsRegistered(true);
    }
  }, []);

  const registerHandler = (
    firstName,
    lastName,
    npiNumber,
    businessAddress,
    businessCity,
    businessState,
    businessPostalCode,
    telephone,
    email
  ) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isRegistered', '1');
    setIsRegistered(true);
    setRegistrationInformation([
      {
        title: 'First Name',
        value: firstName,
      },
      {
        title: 'Last Name',
        value: lastName,
      },
      {
        title: 'NPI Number',
        value: npiNumber,
      },
      {
        title: 'Business Address',
        value: businessAddress,
      },
      {
        title: 'City',
        value: businessCity,
      },
      {
        title: 'City',
        value: businessState,
      },
      {
        title: 'Postal Code',
        value: businessPostalCode,
      },
      {
        title: 'Telephone',
        value: telephone,
      },
      {
        title: 'E-mail',
        value: email,
      },
    ]);

    console.log(registrationInformation);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isRegistered');
    setIsRegistered(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isRegistered} onLogout={logoutHandler} />
      <main>
        {!isRegistered && <Register onRegister={registerHandler} />}
        {isRegistered && (
          <Home
            registrationInformation={registrationInformation}
            onLogout={logoutHandler}
          />
        )}
      </main>
    </React.Fragment>
  );
}

export default App;
