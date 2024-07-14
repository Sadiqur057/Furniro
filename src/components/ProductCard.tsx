import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import { Product } from '../data/products'
import Image from 'next/image';
import { Grid3x3 } from '@mui/icons-material';
import ShareIcon from '@mui/icons-material/Share';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Grid item xs={6} sm={6} md={4} lg={3} >
      <Box sx={{
        position: 'relative',
        justifyContent: 'center',
        fontFamily: 'Poppins',
      }}>
        <Box sx={{
          backgroundColor: 'rgb(244, 245, 247)',
          height: '100%',
          Width: '100%',
          borderRadius: '6px'
        }}>
          <Box
            component="img"
            sx={{
              width: '100%',
              height: {
                xs: '140px',
                sm: '220px',
                md: '285px'
              },
              objectFit: 'cover',
              objectPosition: 'center',
              borderRadius: '6px 6px 0px 0px'
            }}
            alt={product?.name || 'Product Image'}
            src={product?.image[0] || 'https://i.postimg.cc/g20VMtJJ/default-Img.png'}
          />
          <Box sx={{
            padding: '4px 16px 16px',
          }}>
            <Typography sx={{
              fontSize: {
                xs: '18px',
                md: '24px'
              },
              fontWeight: 600,
            }}>
              {product?.name}
            </Typography>
            <Typography sx={{
              color: 'rgb(137, 137, 137)',
              fontWeight: 500,
              paddingY: '4px',
            }}>
              {product?.category}
            </Typography>
            <Box sx={{
              display: "flex",
              gap: '10px'
            }}>
              <Typography sx={{
                fontSize: '20px',
                fontWeight: 600,
              }}>
                Rp {product?.original_price}
              </Typography>
              <Typography sx={{
                color: 'rgb(176, 176, 176)',
                textDecorationLine: 'line-through',
              }}>
                {product?.discounted_price && "Rp"}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{
          backgroundColor: 'rgb(58, 58, 58)',
          height: '100%',
          width: '100%',
          borderRadius: '6px',
          right: 0,
          bottom: 0,
          position: 'absolute',
          opacity: 0,
          '&:hover': {
            opacity: '0.72'
          }
        }}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px'
          }}>
            <Box sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px'
            }}>
              <Link href={`/products/${product?.productId}`}>
                <Button sx={{
                  backgroundColor: 'white',
                  color: 'primary',
                  padding: '6px 12px',
                  fontWeight: 600,
                  '&:hover': {
                    opacity: '1',
                    backgroundColor: 'white'
                  }
                }}>
                  View Details
                </Button>

              </Link>
              <Button sx={{
                backgroundColor: 'white',
                color: 'primary',
                padding: '6px 12px',
                fontWeight: 600,
                '&:hover': {
                  opacity: '1',
                  backgroundColor: 'white'
                }
              }}>
                Add to cart
              </Button>
            </Box>
            <Box sx={{
              display: "flex",
              flexDirection: {
                xs: 'column',
                md: 'row'
              },
              gap: '10px',
              color: 'white'
            }}>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontWeight: 600
              }}>
                <ShareIcon sx={{
                  fontSize: '14px'
                }} />
                Share
              </Typography>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontWeight: 600
              }}>
                <CompareArrowsIcon sx={{
                  fontSize: '18px'
                }} />
                Compare
              </Typography>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontWeight: 600
              }}>
                <FavoriteBorderIcon sx={{
                  fontSize: '18px'
                }} />
                Like
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProductCard;