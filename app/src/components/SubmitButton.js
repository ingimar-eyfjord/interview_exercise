import React from "react";
import Button from "@mui/material/Button";

export default function SubmitButton(props) {
  return (
    <Button onClick={props.handleClick} variant="contained">
      {props.submitButtonText}
    </Button>
  );
}
