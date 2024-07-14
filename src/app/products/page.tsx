import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { Product } from '../../data/products';
import products from '../../data/products';
import ProductCard from '@/components/ProductCard';
import TuneIcon from '@mui/icons-material/Tune';
import { InputBase} from '@mui/material';
import HeadingSection from '@/components/HeadingSection';

const Shop: React.FC = () => {
  return (
    <Box>
      <HeadingSection
        img={'/images/section.png'}
        title={'Products'}>
      </HeadingSection>
      <Box sx={{
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgb(249, 241, 231)',
        padding: "14px 10%"
      }}>
        <Box sx={{
          display: 'flex',
          alignItem: 'center',
          justifyContent: 'center',
          gap:'10px'
        }}>
          <TuneIcon />
          <Typography>
            Filter
          </Typography>
          <Typography>
           |
          </Typography>
          <Typography>
            Showing 1-16 of 32 results
          </Typography>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItem: 'center',
          justifyContent: 'center',
          gap:'10px'
        }}>
          <TuneIcon />
          <Typography>
            Show
          </Typography>
          <InputBase defaultValue='16' sx={{
            padding:'0px 8px',
            width:'32px',
            backgroundColor:'white',
            borderRadius:'2px',
          }}/>
          <Typography>
           Short by
          </Typography>
          <InputBase defaultValue='Default' sx={{
            padding:'0px 8px',
            width:'80px',
            backgroundColor:'white',
            borderRadius:'2px',
          }}/>

        </Box>

      </Box>
      <Box sx={{
        fontFamily: 'poppins',
        padding: '40px 0',
        width: {
          xs: '90%',
          md: '80%'
        },
        margin: 'auto'
      }}>
        <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            products.map((product) => <ProductCard key={product?.productId} product={product} />)
          }
        </Grid>
      </Box>
    </Box>
  );
};

export default Shop;