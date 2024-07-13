'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import Image from 'next/image';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

const pages = ['Home', 'Shop', 'About', 'Contact'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const LinkStyles = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 700,
    fontSize: 32
  }

  // cart related 
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', border: 'none', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
          display: 'flex',
          justifyContent: 'space-around'
        }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Box sx={{ display: { xs: 'none', md: 'flex', } }}>
              <Image src='/logo.png' alt='logo' height={32} width={50}></Image></Box>

            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
              }}
            >
              <Link href='/' style={LinkStyles}>Furniro</Link>
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: 'black' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ paddingX: '10px' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
          }}>
            <Link href='/' style={LinkStyles}>Furniro</Link>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex', gap: '32px' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block', fontWeight: '700', textTransform: 'capitalize' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex', color: 'black', alignItems: 'center', gap: { xs: '8px', md: '24px' } }}>
            <PersonOutlineIcon />
            <SearchIcon />
            <FavoriteBorderIcon />
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{ minHeight: 0, minWidth: 0, padding: 0 }}
            >
              <ShoppingCartCheckoutIcon sx={{
                color: 'black'
              }} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <Box sx={{
                padding: '20px 30px'
              }}>
                <Typography variant='h4'
                  sx={{
                    fontSize: '24px',
                    fontWeight: 600,
                  }}>
                  Shopping Cart
                </Typography>
                <Box sx={{
                  padding: '20px 0',
                  margin: '25px 0',
                  borderTop: '1px solid rgb(217, 217, 217)',
                  borderBottom: '1px solid rgb(217, 217, 217)',
                }}>

                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingY: '15px',
                    gap: '20px'
                  }}>
                    <Box sx={{
                      display: 'flex',
                      gap: '20px',
                      alignItems: 'center',
                      width: '90%',
                    }}>
                      <Box component='img'
                        src="https://i.postimg.cc/QC6ddQ6V/stylish-cafe-chair.png"
                        sx={{
                          height: '80px',
                          with: '80px'
                        }}
                      >
                      </Box>
                      <Box>
                        <Typography sx={{
                          fontWeight: '500',
                          fontSize: '18px',
                          paddingBottom: '5px'
                        }}>
                          Casaliving Wood
                        </Typography>
                        <Box sx={{
                          display: 'flex',
                          gap: '5px'
                        }}>
                          <Typography sx={{
                            fontWeight: '500'
                          }}>1 x  </Typography>
                          <Typography sx={{
                            color: 'primary.main'
                          }}> RS 3200 </Typography>
                        </Box>

                      </Box>
                    </Box>
                    <Typography sx={{
                      backgroundColor: 'rgb(159, 159, 159)',
                      color: 'white',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '25px',
                      width: '25px',
                      borderRadius: '100%',
                    }}>
                      x
                    </Typography>
                  </Box>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingY: '15px',
                    gap: '20px'
                  }}>
                    <Box sx={{
                      display: 'flex',
                      gap: '20px',
                      alignItems: 'center',
                      width: '90%',
                    }}>
                      <Box component='img'
                        src="https://i.postimg.cc/SxYxmzcN/stylish-cafe-chair-2.png"
                        sx={{
                          height: '80px',
                          with: '80px'
                        }}
                      >
                      </Box>
                      <Box>
                        <Typography sx={{
                          fontWeight: '500',
                          fontSize: '18px',
                          paddingBottom: '5px'
                        }}>
                          Asgard Sofa
                        </Typography>
                        <Box sx={{
                          display: 'flex',
                          gap: '5px'
                        }}>
                          <Typography sx={{
                            fontWeight: '500'
                          }}>1 x  </Typography>
                          <Typography sx={{
                            color: 'primary.main'
                          }}> RS 3200 </Typography>
                        </Box>

                      </Box>
                    </Box>
                    <Typography sx={{
                      backgroundColor: 'rgb(159, 159, 159)',
                      color: 'white',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '25px',
                      width: '25px',
                      borderRadius: '100%',
                    }}>
                      x
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
export default Navbar;
