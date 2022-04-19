import React from "react";
import { ButtonGroup } from "@mui/material"
import InterestsListItem from "./InterestsListItem";

export default function InterestsList(props) {

  const { interests } = props;

  const parsedInterests = interests.map(
    interest => <InterestsListItem key={interest} interest={interest} /> 
  )

  return (
    <ButtonGroup orientation="vertical">
      {parsedInterests}
    </ButtonGroup>
  )
}