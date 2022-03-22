import {
  Typography,
  AppBar,
  Toolbar,
  Container,
} from '@material-ui/core';
import React from 'react';

import useStyles from '../styles';

const Header = () => {
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
        >
          annabel b.
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          className={classes.subtitle}
        >
          Authentic Jewellery
        </Typography>
      </Container>
    </>
  );
};

export default Header;
