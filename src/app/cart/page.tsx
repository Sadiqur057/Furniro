import React from 'react';
import { Product } from '../../data/products';
import products from '../../data/products';
import ProductCard from '@/components/ProductCard';
import TuneIcon from '@mui/icons-material/Tune';
import { Box, Grid, InputBase, Typography } from '@mui/material';
import HeadingSection from '../../components/HeadingSection';
import DeleteIcon from '@mui/icons-material/Delete';

const page = () => {
  return (
    <Box>
      <HeadingSection
        img={'/images/section.png'}
        title={'Cart'}>
      </HeadingSection>
      <Box>
        <Box sx={{
          width: {
            sx: '90%',
            md: '80%',
            margin: "30px auto"
          }
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Box sx={{
                display: 'flex',
                alignItem: 'center',
                justifyContent: 'space-around',
                backgroundColor: 'rgb(249, 241, 231)',
                padding: "14px 10%"
              }}>
                <Box sx={{
                  fontWeight: 600,
                  marginRight:'50px'
                }}>
                  Product
                </Box>
                <Box sx={{
                  fontWeight: 600
                }}>
                  Price
                </Box>
                <Box sx={{
                  fontWeight: 600,
                  marginLeft:'35px'
                }}>
                  Quantity
                </Box>
                <Box sx={{
                  fontWeight: 600
                }}>
                  Subtotal
                </Box>
              </Box>
              <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                margin: '10px 0'
              }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: 500,
                }}>
                  <Box component='img'
                    src="https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png"
                    sx={{
                      height: '100px',
                      with: '100px'
                    }}
                  >
                  </Box>
                  <Typography sx={{
                    color: 'text.secondary',
                  }}>
                    Asgard Sofa
                  </Typography>
                </Box>
                <Typography sx={{
                  color: 'text.secondary',
                }}>
                  Rs. 3200
                </Typography>
                <Typography sx={{
                  border: '1px solid gray',
                  padding: '1px 12px'
                }}>
                  1
                </Typography>
                <Box sx={{
                  display:'flex',
                  alignItems:'center',
                  gap:'100px'
                }}>
                  <Typography>
                    3200
                  </Typography>
                  <DeleteIcon sx={{
                    marginRight:'20px'
                  }}/>
                </Box>
              </Box>

            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{
                backgroundColor: 'rgb(249, 241, 231)',
                padding: "20px 10%"
              }}>
                <Typography sx={{
                  fontWeight: 700,
                  fontSize: '32px'
                }}>
                  Cart Table
                </Typography>
                <Box sx={{
                  display: 'flex',
                  gap: '20px',
                  margin: '20px 0',
                  justifyContent: 'space-between'
                }}>
                  <Typography sx={{
                    fontWeight: 600,
                  }}>
                    Subtotal
                  </Typography>
                  <Typography sx={{
                    color: 'primary.main'
                  }}>
                    RS 3200
                  </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  gap: '20px',
                  margin: '10px 0 30px 0',
                  justifyContent: 'space-between'
                }}>
                  <Typography sx={{
                    fontWeight: 600,
                  }}>
                    Subtotal
                  </Typography>
                  <Typography sx={{
                    color: 'primary.main'
                  }}>
                    RS 3200
                  </Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  <Typography sx={{
                    padding: '6px 26px',
                    border: '1px solid gray',
                    width: 'fit-content',
                    borderRadius: '10px'
                  }}>
                    Check Out
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Box>
  );
};

export default page;