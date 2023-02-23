import React from "react";
import { useDispatch } from "react-redux";
import { setNewMessage } from "../messagesSlice";
import { TextField } from "@mui/material";

export default function InputField(props) {
  const dispatch = useDispatch();

  return (
    <TextField
      id="standard-basic"
      value={props.newMessage}
      onChange={(e) => dispatch(setNewMessage(e.target.value))}
      label="Write message"
      variant="standard"
      sx={{ marginTop: "auto" }}
    />
  );
}
