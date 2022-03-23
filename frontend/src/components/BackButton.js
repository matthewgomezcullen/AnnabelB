import { Button } from '@material-ui/core';
import React from 'react';
import useStyles from '../styles';
import { Link } from 'react-router-dom';

const BackButton = ({ to }) => {
  const classes = useStyles();
  return (
    <Link to={to} className={classes.headingLink}>
      <Button
        className={classes.backBtn}
        variant="contained"
        color="primary"
      >
        back
      </Button>
    </Link>
  );
};

export default BackButton;
