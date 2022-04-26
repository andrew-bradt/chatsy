import React from "react";
import { Typography } from "@mui/material";

export default function ContactModalItem(props) {

  const { contact } = props;

  return (
    <>
      <Typography
        align="center"
        sx={{
          padding: 1,
          borderTop: "1px solid",
          borderColor: 'action.disabled'
        }}
      >
        {contact}
      </Typography>
    </>
  )
}