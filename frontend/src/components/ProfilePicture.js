import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@material-ui/core';
import React from 'react';
import useStyles from '../styles';
import { useState, useEffect } from 'react';

const ProfilePicture = ({ small }) => {
  const classes = useStyles();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const getProfile = async () => {
      const data = await fetchProfile();
      setProfile(data);
    };
    getProfile();
  }, []);

  const fetchProfile = async () => {
    const res = await fetch(`/api/profile`);
    const data = await res.json();
    return data;
  };

  return (
    <Container
      className={
        small ? classes.profilePictureSmall : classes.profilePicture
      }
      disableGutters="true"
    >
      <Card
        className={`${classes.card} ${classes.picture}`}
        variant="outline"
      >
        <CardMedia
          className={classes.cardMedia}
          image={profile.profile_pic}
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
            {profile.email}
            <br />
            {profile.phone_number}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProfilePicture;
