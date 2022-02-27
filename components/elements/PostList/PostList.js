import PostTile from "../PostTile/PostTile";
import styles from "./PostList.module.css";

const PostList = () => {
  const renderPostTiles = () => {
    let posts = [];
    for (let i = 0; i < 43; i++) {
      posts.push(<PostTile key={i} />);
    }

    return posts;
  };

  return <div className={styles.container}>{renderPostTiles()}</div>;
};

export default PostList;
