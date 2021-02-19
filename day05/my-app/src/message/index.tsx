import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export interface message {
    messageId: number,
    imgProfileUrl: string,
    senderName: string,
    messageText: string
};

export function Message(messsage:message) {
  return( <h1> {messsage.messageId},
      <img src="messsage.imgProfileUrl" alt="test"/>
      {messsage.messageText}</h1>)
}

export default Message;