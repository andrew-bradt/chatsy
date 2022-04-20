import React from "react";
import { Typography } from "@mui/material";

export default function ContactModalItem(props) {

  const { contact } = props;

  return (
    <Typography>{contact}</Typography>
  )
}