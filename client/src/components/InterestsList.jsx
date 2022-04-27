import React from "react";
import { Typography, Box } from "@mui/material"
import InterestsListItem from "./InterestsListItem";

export default function InterestsList(props) {
  
  const { interests, socket, userId, inLobby } = props;
  
  const parsedInterests = interests.map(
    interest =>
      <InterestsListItem
        key={interest}
        interest={interest}
        socket={socket}
        userId={userId}
        inLobby={inLobby} /> 
  )

  return (
    <Box>
      <Typography component="h1" variant="h5" sx={{margin: '0.2rem'}}>Interests For Matching</Typography>
      {parsedInterests}
    </Box>
  )
}