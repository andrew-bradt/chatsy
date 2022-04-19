import React from "react";
import { ButtonGroup } from "@mui/material"
import InterestsListItem from "./InterestsListItem";

export default function InterestsList(props) {

  const { interests, socket, userId } = props;

  const parsedInterests = interests.map(
    interest =>
      <InterestsListItem
      key={interest}
      interest={interest}
      socket={socket}
      userId={userId} /> 
  )

  return (
    <ButtonGroup orientation="vertical">
      {parsedInterests}
    </ButtonGroup>
  )
}