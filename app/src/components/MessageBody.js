import React from "react";
import Stack from "@mui/material/Stack";

export default function MessageBody(props) {
  return (
    <Stack
      spacing={2}
      direction="column"
      width="100%"
      minWidth="240px"
      margin="auto"
      height="70vh"
      overflow="scroll"
    >
      {props.messageToDisplay}
    </Stack>
  );
}
