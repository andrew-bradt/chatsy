/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography, Box, Button } from '@mui/material';

import React from 'react'

const buttonStyle = css({
  margin: '0.2rem',
  textTransform: 'none',
})

export default function SharedInterests({sharedInterests}) {
  console.log('sharedInterests in SharedInterests Component: ', sharedInterests);
  return (
    <Box>
      <Typography component="h1" variant="h5">Shared Interests</Typography>
      {sharedInterests.map(interest => <Button sx={buttonStyle} disabled variant='contained'>{interest}</Button>)}
    </Box>
  )
}