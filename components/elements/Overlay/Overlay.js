import { useSelector } from "react-redux";

import { selectOverlayType } from "../../../redux/overlay/overlay.selectors";
import CreateConversation from "../CreateConversation/CreateConversation";
import {
  SHOW_CREATE_CONVERSATION,
  SHOW_POST,
} from "../../../redux/overlay/overlay.types";

import styles from "./Overlay.module.css";
import Post from "../Post/Post";

const Overlay = () => {
  const overlayType = useSelector(selectOverlayType);

  const renderComponent = () => {
    switch (overlayType) {
      case SHOW_CREATE_CONVERSATION:
        return <CreateConversation />;
      case SHOW_POST:
        return <Post isFullPost={false} />;

      default:
        break;
    }
  };

  return <div className={styles.container}>{renderComponent()}</div>;
};

export default Overlay;
