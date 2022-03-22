import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from '@material-ui/core';
import React from 'react';
import useStyles from '../styles';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeadingGallery = () => {
  const classes = useStyles();
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const getHeadings = async () => {
      const data = await fetchHeadings();
      setHeadings(data);
    };
    getHeadings();
  }, []);

  const fetchHeadings = async () => {
    const res = await fetch('/api/headingList');
    const data = await res.json();
    return data;
  };

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {headings.map((heading) => (
            <Grid item key={heading.id} xs={12} sm={6} md={4}>
              <Link
                to={`/heading/${heading.id}`}
                className={classes.headingLink}
              >
                <Card
                  className={`${classes.card} ${classes.clickable}`}
                  variant="outlined"
                >
                  <CardMedia
                    className={classes.cardMedia}
                    image={heading.image}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography
                      guttterBottom
                      variant="h5"
                      align="center"
                    >
                      {heading.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HeadingGallery;
