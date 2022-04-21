import React from "react";
import { ButtonGroup } from "@mui/material"
import InterestsListItem from "./InterestsListItem";

export default function InterestsList(props) {
  
  const { interests, socket, userId, inLobby } = props;
  console.log(interests);
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
    <ButtonGroup orientation="vertical">
      {parsedInterests}
    </ButtonGroup>
  )
}