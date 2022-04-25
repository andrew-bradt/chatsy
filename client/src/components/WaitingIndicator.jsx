import React from "react";
import { Typography, Box } from "@mui/material";

export default function WaitingIndicator(props) {
  const { elRef } = props;
  return (
    <Box ref={elRef} sx={{
      visibility: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 3
    }}>
      <Typography component="h1" variant="h5">Analyzing your interests</Typography>
      <img style={{width: '10%'}} src="https://acegif.com/wp-content/uploads/loading-13.gif" alt="placeholder"></img>
    </Box>
  )
}