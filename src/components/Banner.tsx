import React from 'react';
import { Box, Button, Container, createTheme, Grid, ThemeProvider, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: {
          md: 'calc(100vh - 69px)'
        },
        maxHeight: {
          md: '800px'
        },
        backgroundImage: 'url(/images/banner.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '120px 10%',
        fontFamily: 'Poppins',
      }}
    >
      <Box sx={{
        width: {
         xs:'100%', 
         md: '50%'
        },
        backgroundColor: '#FFF3E3',
        padding: {
          xs: '20px',  
          sm: '30px',  
          md: '40px',  
        },
        borderRadius: '15px'
      }}>
        <Typography sx={{
          color: 'black',
          fontWeight: '600',
          letterSpacing: '3px'
        }}>
          New Arrival
        </Typography>
        <Typography sx={{
          color: '#B88E2F',
          fontWeight: '600',
          fontSize: {
            xs: '32px',  
            sm: '40px',  
            md: '52px', 
          },
          lineHeight: {
            xs: '40px',  
            sm: '50px', 
            md: '65px', 
          },
          padding: '10px 0'
        }}>
          Discover Our New Collection
        </Typography>
        <Typography sx={{
          color: 'black',
          fontWeight: '500',
          fontSize: '18ox',
          lineHeight: '24px',
          marginBottom: {
            xs:'20px',
            md:'30px'
          }
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </Typography>
        <Button sx={{
          backgroundColor: '#B88E2F',
          color: 'white',
          borderRadius: '5px',
          fontSize: '14px',
          fontWeight: '700',
          padding: {
            xs:'8px 24px',
            md:'15px 40px'
          },
          '&:hover': {
            backgroundColor: '#b18723'
          }
        }}>BUY NOW</Button>

      </Box>
    </Box>
  );
};

export default Banner;