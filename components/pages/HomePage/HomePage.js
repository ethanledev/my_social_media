import Head from "next/head";
import { Fragment } from "react";

import PostOverview from "../../elements/PostOverview/PostOverview";
import { posts } from "../../../public/database";

import styles from "./HomePage.module.css";

const HomePage = () => {
  const renderPosts = () => {
    let postList = [];
    for (let post in posts) {
      postList.push(
        <div className={styles.post}>
          <PostOverview data={posts[post]} />
        </div>
      );
    }
    return postList;
  };

  return (
    <Fragment>
      <Head>
        <title>My Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.posts}>{renderPosts()}</div>
      </main>
    </Fragment>
  );
};

export default HomePage;
