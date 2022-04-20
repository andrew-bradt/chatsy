import React from "react";
import { Popover, Typography } from "@mui/material"
import ContactModalItem from "./ContactModalItem";

export default function ContactModal(props) {

  const { contacts, anchorEl, setAnchor } = props;

  const parsedListItem = contacts.map(contact => <ContactModalItem key={contact} contact={contact} />)

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
      <div>
        <Typography>Saved contacts</Typography>
        {parsedListItem}
      </div>
    </Popover>
  )
}