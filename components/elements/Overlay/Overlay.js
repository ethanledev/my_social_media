import { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import { selectOverlayType } from "../../../redux/overlay/overlay.selectors";
import CreateConversation from "../CreateConversation/CreateConversation";
import {
  SHOW_CREATE_CONVERSATION,
  SHOW_POST,
} from "../../../redux/overlay/overlay.types";
import { hideOverlay } from "../../../redux/overlay/overlay.actions";

import styles from "./Overlay.module.css";

const Overlay = () => {
  const overlayType = useSelector(selectOverlayType);
  const dispatch = useDispatch();
  const componentRef = useRef();
  const leftArrowRef = useRef();
  const rightArrowRef = useRef();

  const postList = [1, 2, 3, 4, 5];

  const renderComponent = () => {
    switch (overlayType) {
      case SHOW_CREATE_CONVERSATION:
        return <CreateConversation ref={componentRef} />;
      case SHOW_POST:
        break;

      default:
        break;
    }
  };

  const handleOnClick = (e) => {
    if (!componentRef.current.contains(e.target)) {
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
