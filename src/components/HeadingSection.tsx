import { Box, Typography } from '@mui/material';
import React from 'react';

interface headingProps{
  img:string,
  title:string,
}

const HeadingSection:React.FC<headingProps> = ({img,title}) => {
  return (
    <Box sx={{
      width: '100%',
      height: 'fit-content',
      fontFamily: 'Poppins',
      padding: {
        xs: '100px 2px'
      },
      backgroundImage: `url(${img})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Typography variant='h2' sx={{
        fontSize: {
          xs: '34px',
          md: '48px',
        },
        fontWeight: 600,
        marginBottom: '10px'
      }}>
        {title}
      </Typography>
      <Typography variant='h2' sx={{
        fontSize: {
          xs: '16px',
          md: '22px',
        },
        fontWeight: 500
      }}>
        Home &gt; {title}
      </Typography>
    </Box>
  );
};

export default HeadingSection;