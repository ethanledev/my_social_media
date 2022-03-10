import { Fragment, useState } from "react";
import { FaUser } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";

import { getProfileIcon } from "../../../utils";
import PostList from "../../elements/PostList/PostList";

import styles from "./ProfilePage.module.css";
import { useSelector } from "react-redux";
import { selectWindowWidth } from "../../../redux/app/app.selectors";

const ProfilePage = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const windowWidth = useSelector(selectWindowWidth);

  const toggleFollowing = (willFollow) => {
    if (willFollow) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  };

  const renderProfilePicture = () => {
    if (windowWidth > 600) {
      return getProfileIcon("xxl", true);
    } else if (windowWidth > 350) {
      return getProfileIcon("xl", true);
    } else {
      return getProfileIcon("l", true);
    }
  };

  const renderBio = () => (
    <div className={styles.bio}>
      <div>Hieu Le</div>
      <div>
        {
          "Web Developer\nHouston TX\nEmail: hieuhmle@gmail.com\nPhone: (346) 677 - 2577"
        }
      </div>
    </div>
  );

  const renderNumberInfos = () => (
    <div className={styles.infoBox}>
      <span>
        <span className={styles.number}>393</span> posts
      </span>
      <span>
        {" "}
        <span className={styles.number}>1.7m</span> followers
      </span>
      <span style={{ marginRight: 0 }}>
        <span className={styles.number}>333</span> following
      </span>
    </div>
  );

  const renderButtons = () => {
    if (isFollowing) {
      return (
        <div className={styles.buttons}>
          <button className={styles.button}>Message</button>
          <button
            className={styles.button}
            onClick={() => toggleFollowing(false)}
          >
            <FaUser />
            <AiOutlineCheck />
          </button>
        </div>
      );
    } else {
      return (
        <button
          className={`${styles.button} ${styles.blueButton}`}
          onClick={() => toggleFollowing(true)}
        >
          Follow
        </button>
      );
    }
  };

  return (
    <Fragment>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.infoContainer}>
            <div className={styles.infoBox}>
              <div className={styles.profilePicture}>
                {renderProfilePicture()}
              </div>
              <div className={styles.info}>
                <div className={styles.buttonsContainer}>
                  <span>hieuhmle</span>
                  {renderButtons()}
                </div>
                {windowWidth > 750 ? renderNumberInfos() : null}
                {windowWidth > 750 ? renderBio() : null}
              </div>
            </div>
            {windowWidth <= 750 ? renderBio() : null}
          </div>
          {windowWidth <= 750 ? renderNumberInfos() : null}
          <PostList />
        </div>
      </main>
    </Fragment>
  );
};

export default ProfilePage;
