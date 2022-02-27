import { Fragment } from "react";

import PostList from "../../elements/PostList/PostList";
import styles from "./SavedPostsPage.module.css";

const SavedPostsPage = () => {
  return (
    <Fragment>
      <main className={styles.container}>
        <h1>Saved Posts</h1>
        <hr />
        <PostList />
      </main>
    </Fragment>
  );
};

export default SavedPostsPage;
