import React from "react";
import {
  MessagesPageContainer,
  SidePanel,
  SidePanelHeader,
  FriendList,
  Messages,
} from "./messages.styles";

const MessagesPage = () => {
  return (
    <MessagesPageContainer>
      <SidePanel>
        <SidePanelHeader></SidePanelHeader>
        <FriendList></FriendList>
      </SidePanel>
      <Messages></Messages>
    </MessagesPageContainer>
  );
};

export default MessagesPage;
