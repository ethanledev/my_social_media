import React from "react";
import {
  MessagesPageContainer,
  SidePanel,
  SidePanelHeader,
  FriendList,
  Messages,
} from "./messages-page.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

const MessagesPage = () => {
  return (
    <MessagesPageContainer>
      <SidePanel>
        <SidePanelHeader>
          <div></div>
          <div>hieuhmle</div>
          <FontAwesomeIcon icon={faEdit} title="Create New Message" />
        </SidePanelHeader>
        <FriendList></FriendList>
      </SidePanel>
      <Messages></Messages>
    </MessagesPageContainer>
  );
};

export default MessagesPage;
