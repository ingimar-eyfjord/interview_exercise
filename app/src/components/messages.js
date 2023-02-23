import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAllMessages, setNewMessage } from "../messagesSlice";
import MessageBody from "./MessageBody";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import messagingService from "../services/messaging.service";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";
import { Typography } from "@mui/material";

export default function Messages() {
  const newMessage = useSelector((state) => state.messages.message);
  const allMessages = useSelector((state) => state.messages.allMessages);

  const [messageToDisplay, setMessageToDisplay] = useState([]); // Redux wasn't happy about putting React elements into the Redux store, so I kept this useState

  const dispatch = useDispatch();

  const RetrieveMessages = useCallback(async () => {
    messagingService
      .findAll()
      .then((response) => {
        if (response.data.length > 0) {
          dispatch(setAllMessages(response.data));
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }, [dispatch]);

  useEffect(() => {
    RetrieveMessages();
  }, [RetrieveMessages]);

  useEffect(() => {
    const messagesToDisplay = allMessages.map((message) => {
      return (
        <Stack key={message.id} direction="row" width="100%">
          <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
          <Typography variant="p" component="p">
            {message.Message_content}
          </Typography>
        </Stack>
      );
    });
    setMessageToDisplay(messagesToDisplay);
  }, [allMessages]);

  const postMessage = () => {
    const messageBody = {
      Message_content: newMessage,
    };
    messagingService
      .create(messageBody)
      .then(() => {
        RetrieveMessages();
      })
      .catch((e) => {
        console.log(e);
      });
    dispatch(setNewMessage(""));
  };

  return (
    <Stack
      spacing={2}
      direction="column"
      width="30vw"
      minWidth="240px"
      margin="auto"
    >
      <MessageBody messageToDisplay={messageToDisplay} />
      <InputField newMessage={newMessage} />
      <SubmitButton handleClick={postMessage} submitButtonText={"Send"} />
    </Stack>
  );
}
