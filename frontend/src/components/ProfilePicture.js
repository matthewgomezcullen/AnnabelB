import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from '../styles';

const ProfilePicture = () => {
  const classes = useStyles();
  return (
    <Container
      className={classes.profilePicture}
      disableGutters="true"
    >
      <Card
        className={`${classes.card} ${classes.picture}`}
        variant="outline"
      >
        <CardMedia
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
        />
        <CardContent
          className={classes.contactsContainer}
          align="center"
        >
          <Typography
            variant="subtitle1"
            align="center"
            className={`${classes.subtitle} ${classes.contacts}`}
            color="primary"
          >
            a@annabel.la
            <br />
            07711169111
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProfilePicture;
