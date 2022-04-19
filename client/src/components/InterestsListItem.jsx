import React, {useState} from "react";
import { Button } from "@mui/material";

export default function InterestsListItem(props) {
  const [isCriteria, toggleCriteria] = useState(true);
  const variant = isCriteria ? 'contained' : 'text'; 
  const { interest } = props;

  return (
    <Button
      variant={variant}
      onClick={() => {
      toggleCriteria(prev => !prev)
      }}>
      {interest}
    </Button>
  );
}