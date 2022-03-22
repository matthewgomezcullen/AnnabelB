import { Button } from '@material-ui/core';
import React from 'react';
import useStyles from '../styles';
import { Link } from 'react-router-dom';
import {
  MuiThemeProvider,
  createTheme,
} from '@material-ui/core/styles';
const theme = createTheme({
  palette: {
    primary: {
      main: '#4682B4',
    },
    secondary: {
      main: '#B0C4DE',
    },
  },
});

const BackButton = ({ to }) => {
  const classes = useStyles();
  return (
    <MuiThemeProvider theme={theme}>
      <Link to={to} className={classes.headingLink}>
        <Button
          className={classes.backBtn}
          variant="contained"
          color="primary"
        >
          back
        </Button>
      </Link>
    </MuiThemeProvider>
  );
};

export default BackButton;
