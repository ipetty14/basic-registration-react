import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Thank you for registering!</h1>
      {props.registrationInformation.map((item) => {
        return (
          <p>
            {item.title}: {item.value}
          </p>
        );
      })}
    </Card>
  );
};

export default Home;
