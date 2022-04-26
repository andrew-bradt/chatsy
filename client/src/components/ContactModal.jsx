import React from "react";
import { Popover, Typography } from "@mui/material"
import ContactModalItem from "./ContactModalItem";

export default function ContactModal(props) {

  const { contacts, anchorEl, setAnchor } = props;

  const parsedListItem = contacts.length ? contacts.map(contact => <ContactModalItem key={contact} contact={contact} />) : <Typography align="center" sx={{padding: 1}}>Emails</Typography>

  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onClose={() => setAnchor(null)}
    >
      <Typography
        align="center"
        sx={{
          padding: 1,
          color: 'primary.contrastText',
          backgroundColor: 'primary.main',
          minWidth: 200
        }}
      >
        Saved contacts
      </Typography>
        {parsedListItem}
    </Popover>
  )
}