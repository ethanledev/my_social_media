import PostTile from "../PostTile/PostTile";
import styles from "./PostList.module.css";

const PostList = ({ list }) => {
  const renderPostTiles = () => {
    return list.map((id, index) => (
      <PostTile key={index} id={id} list={list} />
    ));
  };

  return <div className={styles.container}>{renderPostTiles()}</div>;
};

export default PostList;
