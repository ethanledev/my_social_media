import styled from "styled-components";
import * as global from "../../global-styles";

export const MessagesPageContainer = styled.div`
  display: flex;
  height: 90vh;
  margin: 15px auto;
  background-color: white;
  width: 800px;
`;

export const SidePanelHeader = styled.div`
  height: 60px;
  border-bottom: 1px solid ${global.borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  font-size: 20px;

  svg {
    cursor: pointer;
    font-size: 25px;
  }
`;

export const FriendList = styled.div``;

export const SidePanel = styled.div`
  width: 300px;
  border: 1px solid ${global.borderColor};
`;

export const Messages = styled.div`
  width: 500px;
  border: 1px solid ${global.borderColor};
  border-left: 0px;
`;
