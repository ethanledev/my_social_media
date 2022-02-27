import { Fragment, useState } from "react";

import { getProfileIcon } from "../../../utils";
import { FaUser } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";

import styles from "./ProfilePage.module.css";
import Image from "next/image";

const ProfilePage = ({ windowWidth }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(true);
  };

  const renderButtons = () => {
    if (isFollowing) {
      return (
        <div className={styles.buttons}>
          <div className={styles.button}>Message</div>
          <div className={styles.button}>
            <FaUser />
            <AiOutlineCheck />
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.blueButton} onClick={handleFollow}>
          Follow
        </div>
      );
    }
  };

  const renderBio = () => (
    <div className={styles.bioContainer}>
      <div className={styles.displayName}>Hieu Le</div>
      <div className={styles.bio}>
        {
          "For Work (My manager)\nTel : +6696-851-8199\nline ID :@baifern_work(with@)For Work (My manager)\nTel : +6696-851-8199\nline ID :@baifern_work(with@)For Work (My manager)\nTel : +6696-851-8199\nline ID :@baifern_work(with@)For Work (My manager)\nTel : +6696-851-8199\nline ID :@baifern_work(with@)"
        }
      </div>
    </div>
  );

  const renderPosts = () => {
    let posts = [];
    for (let i = 0; i < 8; i++) {
      posts.push(
        <Image
          key={i}
          src="/post.jpg"
          layout="responsive"
          width={0}
          height={0}
          alt="post"
        />
      );
    }

    return posts;
  };

  const renderProfilePicture = () => {
    if (windowWidth > 750) {
      return getProfileIcon("xl");
    } else {
      return getProfileIcon("l");
    }
  };

  const renderNumbersInfo = () => {
    return (
      <div className={styles.info}>
        <div>
          <span className={styles.infoNumber}>4,355 </span>
          <span>posts</span>
        </div>
        <div>
          <span className={styles.infoNumber}>9,9m </span>
          <span>followers</span>
        </div>
        <div>
          <span className={styles.infoNumber}>481 </span>
          <span>following</span>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <main className={styles.main}>
        <div className={styles.infoContainer}>
          {renderProfilePicture()}
          <div className={styles.infos}>
            <div className={`${styles.info} ${styles.infoHeader}`}>
              <div className={styles.username}>hieuhmle</div>
              {renderButtons()}
            </div>
            {windowWidth > 350 && renderNumbersInfo()}
            {windowWidth > 750 && renderBio()}
          </div>
        </div>
        {windowWidth <= 350 && renderNumbersInfo()}
        {windowWidth <= 750 && renderBio()}
        <hr />
        <div className={styles.posts}>{renderPosts()}</div>
      </main>
    </Fragment>
  );
};

export default ProfilePage;
