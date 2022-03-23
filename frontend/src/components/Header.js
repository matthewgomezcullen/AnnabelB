import {
  Typography,
  AppBar,
  Toolbar,
  Container,
} from '@material-ui/core';
import React from 'react';

import useStyles from '../styles';

const Header = ({ theme }) => {
  const classes = useStyles();

  return (
    <>
      <Container
        className={classes.header}
        maxWidth="xl"
        height="200px"
      >
        <Typography
          variant="h2"
          align="center"
          className={classes.title}
          color="primary"
        >
          annabel b.
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          className={classes.subtitle}
          color="secondary"
        >
          Bespoke Handmade Jewellery
        </Typography>
      </Container>
    </>
  );
};

export default Header;
