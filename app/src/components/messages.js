import React, { useEffect, useCallback } from "react";
import messagingService from "../services/messaging.service";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { Typography } from "@mui/material";

export default function Messages() {
  const [messages, setMessages] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [messageToDisplay, setMessageToDisplay] = React.useState([]);

  const RetrieveMessages = useCallback(async () => {
    messagingService
      .findAll()
      .then((response) => {
        console.log(response);
        if (response.data.length > 0) {
          setMessages(response.data);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    console.log("useEffect for retrieved messages");
    RetrieveMessages();
  }, [RetrieveMessages]);

  useEffect(() => {
    console.log("useEffect for msg");
    const messagesToDisplay = messages.map((message) => {
      return (
        <Stack direction="row" width="100%">
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          <Typography variant="p" component="p">
            {message.Message_content}
          </Typography>
        </Stack>
      );
    });
    setMessageToDisplay(messagesToDisplay);
  }, [messages]);

  const postMessage = () => {
    const messageBody = {
      Message_content: message,
    };
    console.log("messagingService");
    messagingService
      .create(messageBody)
      .then((response) => {
        console.log("Respons fra server vha Axios %o", response);
        RetrieveMessages();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Stack spacing={2} direction="column" width="20%" margin="auto">
      <Stack
        spacing={2}
        direction="column"
        width="20%"
        margin="auto"
        height="80vh"
      >
        {messageToDisplay}
      </Stack>
      <TextField
        id="standard-basic"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        label="Write message"
        variant="standard"
        sx={{ marginTop: "auto" }}
      />
      <Button onClick={postMessage} variant="contained">
        Contained
      </Button>
    </Stack>
  );
}
