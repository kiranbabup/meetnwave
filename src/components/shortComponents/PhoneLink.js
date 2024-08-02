import React from 'react';
import { Box } from '@mui/material';
import phgif from '../../images/gifs/Phone-icon.gif';

const PhoneLinked = ({ phoneNumber }) => {
  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Box
      component="a"
      href={`tel:${phoneNumber}`}
      onClick={handleClick}
      sx={{
        display: 'inline-block',
        textDecoration: 'none',
        width: 50,
        height: 50,
        '& img': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        },
      }}
    >
      <Box
        component="img"
        src={phgif}
        alt="Call"
      />
    </Box>
  );
};

export default PhoneLinked;
