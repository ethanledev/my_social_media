import { Fragment } from "react";

import Notifications from "../../elements/Notifications/Notifications";

import styles from "./NotificationsPage.module.css";

const NotificationsPage = () => (
  <Fragment>
    <main className={styles.container}>
      <Notifications />
    </main>
  </Fragment>
);

export default NotificationsPage;
