import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Message from "./message";

ReactDOM.render(
  <React.StrictMode>
    <Message
      messageId={1}
      imgProfileUrl="https://i.ibb.co/Npv3bk7/image-2021-02-18-164910.png"
      senderName="Pepe"
      messageText="Life sucks, is banana a bread, gonna kill a ship later"
    />
  </React.StrictMode>,
  document.getElementById("root")
);
