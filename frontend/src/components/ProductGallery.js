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
import { Link, useParams } from 'react-router-dom';
import BackButton from './BackButton';

const ProductGallery = () => {
  const { headingID } = useParams();
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    getProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch(
      `/api/productList?headingID=${headingID}`
    );
    const data = await res.json();
    return data;
  };

  return (
    <>
      <BackButton to="/" />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {products.length > 0 ? (
            products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card className={classes.card} variant="outlined">
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.main_image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" align="center">
                      {product.name}
                    </Typography>
                    <Typography variant="h7" align="center">
                      £{product.price}
                    </Typography>
                    <Typography>{product.details}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <p> No items </p>
          )}
        </Grid>
      </Container>
    </>
  );
};

export default ProductGallery;
