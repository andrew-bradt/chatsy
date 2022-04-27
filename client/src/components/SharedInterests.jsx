/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography, Box, Button } from '@mui/material';

import React from 'react'

const buttonStyle = css({
  margin: '0.2rem',
  textTransform: 'none',
})

export default function SharedInterests({sharedInterests}) {
  return (
    <Box css={{width: '100%'}}>
      <Typography component="h1" variant="h5" sx={{margin: '0.2rem'}}>Shared Interests</Typography>
      {sharedInterests.map(interest => <Button sx={buttonStyle} disabled variant='contained' key={interest}>{interest}</Button>)}
    </Box>
  )
}