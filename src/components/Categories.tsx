import { Box, Grid, Typography } from '@mui/material';
import { type } from 'os';
import React from 'react';
// import diningImg from '/images/category/dining.png'



const Categories = () => {

  interface CategoriesData {
    img: string,
    type: string
  }

  const categoriesData: CategoriesData[] = [
    {
      img: '/images/category/dining.png',
      type: "Dining"
    },
    {
      img: "/images/category/living.png",
      type: "Living"
    },
    {
      img: "/images/category/bedroom.png",
      type: "Bedroom"
    },
  ]

  return (
    <Box sx={{
      fontFamily: 'poppins',
      padding: '40px 0',
      width: {
        xs:'90%',
        md:'80%'
      },
      margin: 'auto'
    }}>
      <Typography sx={{
        fontSize: {
          xs:'28px',
          md:'40px'
        },
        textAlign: 'center',
        fontWeight: '700'
      }}>
        Browse The Range
      </Typography>
      <Typography sx={{
        fontSize: '20px',
        textAlign: 'center',
        marginBottom: '40px',
        paddingTop:'10px'
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>

      <Grid container spacing={{ xs: 1, sm:2, md: 3 }}>
        {
          categoriesData.map((category) => <Grid key={category?.type} item xs={4} sm={6} lg={4}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: {
                xs:'4px',
                md:'16px'
              }
            }}>
              <Box component='img' sx={{
                width:'100%',
                height: {
                  xs:'120px',
                  sm:'240px',
                  md:'320px',
                },
                objectFit: 'cover',
                objectPosition: 'center'
              }}
                src={category?.img}>
              </Box>
              <Typography sx={{
                fontSize: {
                  xs:'18px',
                  sm:'20px',
                  md:'24px',
                },
                fontWeight: 600
              }}>
                {category?.type}
              </Typography>
            </Box>
          </Grid>)
        }
      </Grid >
    </Box >
  );
};

export default Categories;