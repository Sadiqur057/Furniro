'use client'
import React, { useState } from 'react';
import { findProduct } from '@/data/products';
import { Box, Button, Grid, Rating, Typography } from '@mui/material';
import Link from 'next/link';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

import { Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';


interface ProductParams {
  productId: string
}

interface ProductProps {
  params: ProductParams
}

const ProductDetails: React.FC<ProductProps> = ({ params }) => {

  const product = findProduct(params?.productId)
  console.log(product)

  const [displayImg, setDisplayImg] = useState(product?.image[0])
  const [productCount, setProductCount] = useState(1)
  const [selectedSize, setSelectedSize] = useState('sm')

  const handleDisplayImage = (img: string) => {
    console.log(img);
    setDisplayImg(img)
  }

  const handleProductCount = (change: string) => {
    if (change === 'dec' && productCount > 0) {
      setProductCount(prev => prev -= 1)
    } else if (change === 'inc') {
      setProductCount(prev => prev + 1)
    }
  }

  const handleProductSize = (size: string) => {
    console.log(size)
  }

  const LinkStyles = {
    textDecoration: 'none',
    color: '#9F9F9F'
  }


  return (
    <Box>
      <Box sx={{
        padding: '20px 10%',
        backgroundColor: 'secondary.main',
        display: 'flex',
        gap: '15px'
      }}>
        <Link style={LinkStyles} href='/'>Home</Link> &gt;
        <Link style={LinkStyles} href='/products'>Shop</Link> &gt;
        <Typography sx={{
          borderLeft: '2px solid #9F9F9F',
          paddingX: '15px',
          fontWeight: 500
        }}>
          {product?.name}
        </Typography>
      </Box>
      <Box sx={{
        width: {
          xs: '90%',
          md: '80%',
          margin: '30px auto'
        }
      }}>
        <Grid container spacing={{ xs: 4, md: 4 }}>
          <Grid item xs={12} md={7} >
            <Box sx={{
              display: 'flex',
              gap: '15px',
              width: '100%'
            }}>
              <Box sx={{
                width: '15%'
              }}>
                {
                  product?.image.map((pd, idx) => <Box key={idx}
                    component='img'
                    onClick={() => handleDisplayImage(pd)}
                    src={product?.image[idx]}
                    sx={{
                      width: '100%',
                      borderRadius: '4px',
                      marginBottom: '6px',
                      '&:hover': {
                        cursor: 'pointer'
                      }
                    }}
                  >
                  </Box>)
                }
              </Box>
              <Box
                component='img'
                sx={{
                  width: '100%',
                  height: '440px',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                src={displayImg}>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                width: '100%'
              }}
            >
              <Typography
                variant='h2'
                sx={{
                  fontSize: {
                    xs: '32px',
                    md: '42px'
                  },
                  fontWeight: 500,
                }}>
                {product?.name}
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  fontSize: {
                    xs: '18px',
                    md: '24px'
                  },
                  fontWeight: 500,
                  color: 'text.secondary'
                }}>
                Rp. {product?.discounted_price}
              </Typography>
              <Box sx={{
                display: 'flex',
                gap: '15px'
              }}>
                <Rating name="read-only" value={4} readOnly />
                <Typography sx={{
                  borderLeft: '2px solid rgb(159, 159, 159)',
                  paddingX: '15px',
                  color: 'text.secondary'
                }}>
                  5 Customer Review
                </Typography>
              </Box>
              <Typography sx={{
                marginY: '10px',
                fontWeight: '500'
              }}>
                {product?.description.slice(0, 240)}...
              </Typography>
            </Box>

            <Box sx={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center'
            }}>
              <Typography sx={{
                color: 'text.secondary',
                paddingY: '2px'
              }}>
                Size
              </Typography>
              {
                product?.size.map(item => <Typography key={item}
                  sx={{
                    backgroundColor: item === selectedSize ? 'primary.main' : 'secondary.main',
                    color:item=== selectedSize? 'white': 'black',
                    width: '33px',
                    height: '33px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '4px',
                    '&:hover': {
                      cursor: 'pointer'
                    },
                    padding: '4px',

                  }}
                  onClick={()=>setSelectedSize(item)}>
                  {item}
                </Typography>)
              }
            </Box>
            <Box sx={{
              display: 'flex',
              gap: '10px',
              marginY: '15px'
            }}>
              <Box sx={{
                display: 'flex',
                border: '1px solid gray',
                padding: '4px 6px',
                alignItems: 'center',
                borderRadius: '8px',

              }}>
                <RemoveIcon
                  onClick={() => handleProductCount('dec')} sx={{
                    padding: '6px',
                    '&:hover': {
                      cursor: 'pointer'
                    }
                  }} />
                <Typography
                  sx={{ paddingX: '4px' }}>
                  {productCount}
                </Typography>
                <AddIcon
                  onClick={() => handleProductCount('inc')} sx={{
                    padding: '6px',
                    '&:hover': {
                      cursor: 'pointer'
                    }
                  }} />
              </Box>
              <Button sx={{
                border: '1px solid gray',
                padding: '4px 20px',
                color: 'black',
                borderRadius: '8px',
              }}>Add To Cart</Button>
              <Button sx={{
                border: '1px solid gray',
                padding: '4px 20px',
                color: 'black',
                borderRadius: '8px',
              }}>+ &nbsp; Compare</Button>
            </Box>

            <Box>
              <TableContainer sx={{
                width: 'fit-content'
              }}>
                <Table sx={{ boxShadow: 'none', border: 'none' }}>
                  <TableBody>
                    <TableRow >
                      <TableCell sx={{
                        borderBottom: 'none',
                        padding: '2px 10px 2px 0'
                      }} component="th" scope="row">
                        <Typography variant="subtitle1">SKU</Typography>
                      </TableCell>
                      <TableCell sx={{
                        borderBottom: 'none',
                        padding: '2px 10px 2px 0'
                      }}>
                        <Typography variant="body1">: {product?.productId}</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{
                        borderBottom: 'none',
                        padding: '2px 10px 2px 0'
                      }} component="th" scope="row">
                        <Typography variant="subtitle1">Category</Typography>
                      </TableCell>
                      <TableCell sx={{
                        borderBottom: 'none',
                        padding: '2px 10px 2px 0'
                      }}>
                        <Typography variant="body1">: {product?.category}</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{
                        borderBottom: 'none',
                        padding: '2px 10px 2px 0'
                      }} component="th" scope="row">
                        <Typography variant="subtitle1">Tags</Typography>
                      </TableCell>
                      <TableCell sx={{
                        borderBottom: 'none',
                        padding: '2px 10px 2px 0'
                      }}>
                        <Typography variant="body1">
                          : {product?.tags.join(', ')}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{
        width: {
          xs: '90%',
          md: '80%',
          margin: '30px auto'
        }
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: {
            xs: '10px',
            md: '30px'
          },
          flexWrap: 'wrap',
          marginBottom: '30px'
        }}>
          <Typography variant='h5' sx={{
            fontWeight: '600'
          }}>
            Description
          </Typography>
          <Typography variant='h5' sx={{
            fontWeight: '600',
            color: 'text.secondary'
          }}>
            Additional Information
          </Typography>
          <Typography variant='h5' sx={{
            fontWeight: '600',
            color: 'text.secondary'
          }}>
            Reviews [5]
          </Typography>
        </Box>
        <Typography sx={{
          marginBottom: '30px'
        }}>
          {product?.description}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box component='img'
              src={product?.image[0]}
              sx={{
                flex: '1',
                width: '100%',
                height: {
                  xs: '120px',
                  sm: '220px',
                  md: '330px'
                },
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            >
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box component='img'
              src={product?.image[1]}
              sx={{
                flex: '1',
                width: '100%',
                height: {
                  xs: '120px',
                  sm: '220px',
                  md: '330px'
                },
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            >
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box component='img'
              src={product?.image[2]}
              sx={{
                flex: '1',
                width: '100%',
                height: {
                  xs: '120px',
                  sm: '220px',
                  md: '330px'
                },
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            >
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductDetails;