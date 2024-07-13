import { Box, Button, Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import React from 'react';
import products from '../data/products'
import Link from 'next/link';

const Products: React.FC = () => {

  return (
    <Box sx={{
      fontFamily: "Poppins",
      width: {
        xs: '90%',
        md: '80%'
      },
      margin: 'auto',
    }}>
      <Typography sx={{
        fontSize: {
          xs: '28px',
          md: '40px'
        },
        fontWeight: 700,
        textAlign: 'center',
        paddingY: '40px'
      }}>
        Our Products
      </Typography>

      <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
        {
          products.slice(0, 8).map((product) => <ProductCard key={product?.productId} product={product} />)
        }
      </Grid>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: '20px'
      }}>
        <Link href='/products'>
          <Button sx={{
            border: '1px solid #B88E2F',
            color: 'primary',
            borderRadius: '5px',
            fontSize: '14px',
            fontWeight: '700',
            padding: {
              xs: '8px 24px',
              md: '15px 40px'
            },
            '&:hover': {
              backgroundColor: '#b18723',
              color: 'white'
            }
          }}>Show More</Button></Link>
      </Box>
    </Box>
  );
};

export default Products;