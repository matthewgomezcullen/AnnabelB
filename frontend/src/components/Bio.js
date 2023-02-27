import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from '../styles';
import ProfilePicture from './ProfilePicture';
import useMediaQuery from '@mui/material/useMediaQuery';

const Bio = () => {
  const classes = useStyles();
  const matches = useMediaQuery('(max-width: 800px)');
  const paragraphs = [
    'The sun-soaked shores of Naxos in Greece first inspired Annabel to create jewellery. Her flair for making tactile, beautiful pieces continues to be inspired by the sea and sand’s unique sensation on the skin. Jewellery is more than accessory, Annabel believes, and can almost be considered part of the body. Her own hands are a case in point – across a career spanning 30 years Annabel has worn rings on every finger without fail.',
    'The fluid nature of where jewellery ends and the body begins is evident in Annabel’s range of pieces designed to be worn in non-traditional positions – such as bangles that bridge the hand and sit above the elbow. Rings that rest on the upper finger and that bring life to toes are another specialism.',
    'In her chain mail designs intricate handmade chains exhibit Annabel’s deft craftsmanship and dedication to fine detail. It is her fascination with the traditional locket that is behind Annabel’s modern interpretation of the piece. In her ‘Be a Face’ collection the photograph is one with the jewellery.',
    'From her workshop in South Molton Street in London Annabel never ceases to grow and develop her creative passion by exploring new jewellery-making techniques.',
    'Her parallel life as a devoted and longstanding ambassador, fundraiser and volunteer on the wards of Great Ormond Street Hospital drives Annabel’s commitment to making a donation from every jewellery sale to this remarkable children’s hospital.',
    'Away from the studio Annabel loves art, ceramics and running on Hampstead Heath.',
  ];

  return (
    <>
      {!matches && <ProfilePicture small={matches} />}
      <Container maxWidth="md" disableGutters="true">
        <Box
          sx={{ borderRadius: 6 }}
          className={classes.bio}
          bgcolor="secondary.main"
        >
          {paragraphs.map((paragraph) => (
            <Typography className={classes.paragraph} align="center">
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Container>
          {matches && <ProfilePicture small={matches} />}
          {matches && <br></br>}
    </>
  );
};

export default Bio;
