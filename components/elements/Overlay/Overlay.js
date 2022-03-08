import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { selectOverlayType } from "../../../redux/overlay/overlay.selectors";
import CreateConversation from "../CreateConversation/CreateConversation";
import {
  SHOW_CREATE_CONVERSATION,
  SHOW_POST,
} from "../../../redux/overlay/overlay.types";
import { hideOverlay } from "../../../redux/overlay/overlay.actions";

import styles from "./Overlay.module.css";
import { useState } from "react";

const Overlay = () => {
  const [componentRefs, setComponentRefs] = useState([]);
  const overlayType = useSelector(selectOverlayType);
  const dispatch = useDispatch();

  const renderComponent = () => {
    switch (overlayType) {
      case SHOW_CREATE_CONVERSATION:
        return <CreateConversation setComponentRefs={setComponentRefs} />;
      case SHOW_POST:
        break;

      default:
        break;
    }
  };

  const handleOnClick = (e) => {
    if (componentRefs.length) {
      for (let ref of componentRefs) {
        if (ref.current.contains(e.target)) {
          return;
        }
      }

      dispatch(hideOverlay());
    }
  };

  return (
    <div className={styles.container} onClick={(e) => handleOnClick(e)}>
      {renderComponent()}
    </div>
  );
};

export default Overlay;
