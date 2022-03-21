import { Card, CardMedia } from '@material-ui/core';
import React from 'react';

const ProfilePicture = () => {
  return (
    <Card className={classes.profilePicture}>
      <CardMedia
        className={classes.cardMedia}
        image="https://source.unsplash.com/random"
      />
    </Card>
  );
};

export default ProfilePicture;
