import { posts } from "../../../public/database";
import PostOverview from "../PostOverview/PostOverview";

import styles from "./PostList.module.css";

const PostList = () => {
  const renderPosts = () => {
    let postList = [];
    for (let post in posts) {
      postList.push(
        <div className={styles.post} key={posts[post].id}>
          <PostOverview data={posts[post]} />
        </div>
      );
    }
    return postList;
  };

  return <div className={styles.container}>{renderPosts()}</div>;
};

export default PostList;
