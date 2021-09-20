import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import logo from '../../images/logo20.png';

const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <img src={logo} />
      <Navigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
    </header>
  );
};

export default MainHeader;
