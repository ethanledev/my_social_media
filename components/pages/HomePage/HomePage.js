import Head from "next/head";
import { Fragment } from "react";
import PostList from "../../elements/PostList/PostList";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <title>My Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <PostList />
      </main>
    </Fragment>
  );
};

export default HomePage;
